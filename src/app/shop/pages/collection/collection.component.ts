import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopifyCollectionService } from 'src/app/shared/services/shopify-collection.service';
import { ShopifyStorefrontService } from 'src/app/shared/services/shopify-storefront.service';
import { ProductMapperService } from 'src/app/shared/services/product-mapper.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ICollection } from 'src/app/shared/types/collection-d-t';
import { IProduct } from 'src/app/shared/types/product-d-t';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
  standalone: false
})
export class CollectionComponent implements OnInit {
  collection: ICollection = {
    id: '',
    title: '',
    handle: '',
    description: '',
    image: { url: '', altText: '' }
  };
  products: IProduct[] = [];
  loading = true;
  error: string | null = null;
  


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private collectionService: ShopifyCollectionService,
    private productService: ProductService,
    private storefront: ShopifyStorefrontService,
    private mapper: ProductMapperService
  ) {}

  ngOnInit(): void {
    const handle = this.route.snapshot.paramMap.get('handle');
    if (!handle) {
      this.error = 'No collection handle provided';
      this.loading = false;
      return;
    }

    this.loadCollection(handle);
  }

  private loadCollection(handle: string): void {
    this.collectionService.getCollectionByHandle(handle).subscribe({
      next: (collection) => {
        if (!collection) {
          this.error = 'Collection not found';
          this.loading = false;
          return;
        }

        this.collection = collection;

        // Load full product data for all products in this collection
        const productIds = (collection.products || []).map(p => String(p.id));
        if (productIds.length === 0) {
          this.loading = false;
          return;
        }

        // Fetch all products from ProductService and filter by IDs in this collection
        this.productService.products.subscribe(allProducts => {
          this.products = allProducts.filter(p => productIds.includes(String(p.id)));
          this.loading = false;
        });
      },
      error: (err) => {
        console.error('Failed to load collection:', err);
        this.error = 'Failed to load collection';
        this.loading = false;
      }
    });
  }
}