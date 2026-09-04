import { Component, Input, OnInit } from '@angular/core';
import { IProduct, IProductVariant } from '../../types/product-d-t';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details-upper',
  templateUrl: './product-details-upper.component.html',
  styleUrls: ['./product-details-upper.component.scss'],
  standalone: false
})
export class ProductDetailsUpperComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() bottomShow: boolean = true;
  @Input() style_2: boolean = false;

  selectedOptions: { [key: string]: string } = {};
  selectedVariant: IProductVariant | null = null;

  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) {}

  ngOnInit() {
    if (this.product) {
      this.productService.activeImg = this.product.img;
      
      // Initialize selectedOptions from product's default variant
      if (this.product.selectedOptions) {
        this.selectedOptions = { ...this.product.selectedOptions };
      }
      
      // Find matching variant based on selected options
      this.findSelectedVariant();
    }
  }

  /**
   * Find the matching variant based on selected options
   */
  findSelectedVariant(): void {
    if (!this.product.variants || this.product.variants.length === 0) {
      // Single variant product - use default
      this.selectedVariant = this.product.variants?.[0] || null;
      return;
    }

    // Try to find exact match
    const match = this.product.variants.find(v => 
      v.availableForSale && 
      v.selectedOptions.every(opt => this.selectedOptions[opt.name] === opt.value)
    );

    if (match) {
      this.selectedVariant = match;
    } else {
      // No exact match - find first available variant that matches partial options
      this.selectedVariant = this.product.variants.find(v => v.availableForSale) || this.product.variants[0] || null;
    }
  }

  /**
   * Handle option selection
   */
  onOptionChange(optionName: string, value: string): void {
    this.selectedOptions[optionName] = value;
    this.findSelectedVariant();
    
    // Update active image if variant has different image
    if (this.selectedVariant?.image?.url) {
      this.productService.activeImg = this.selectedVariant.image.url;
    }
  }

  /**
   * Get available values for an option
   */
  getOptionValues(optionName: string): string[] {
    const option = this.product.options?.find(o => o.name === optionName);
    return option?.values || [];
  }

  /**
   * Check if option value is available for selected combination
   */
  isOptionValueAvailable(optionName: string, value: string): boolean {
    if (!this.product.variants) return true;
    
    // Create temporary selection and check if any variant matches
    const tempOptions = { ...this.selectedOptions, [optionName]: value };
    return this.product.variants.some(v => 
      v.availableForSale && 
      v.selectedOptions.every(opt => tempOptions[opt.name] === opt.value)
    );
  }

  /**
   * Add selected variant to cart
   */
  addToCart(): void {
    if (!this.product) return;
    
    // Create a copy of the product with the selected variant
    const productToAdd = { ...this.product };
    
    // Update price, variantId, and other variant-specific data
    if (this.selectedVariant) {
      productToAdd.variantId = this.selectedVariant.id;
      productToAdd.price = this.selectedVariant.price;
      productToAdd.old_price = this.selectedVariant.compareAtPrice;
      productToAdd.discount = this.selectedVariant.compareAtPrice && this.selectedVariant.compareAtPrice > this.selectedVariant.price
        ? Math.round(((this.selectedVariant.compareAtPrice - this.selectedVariant.price) / this.selectedVariant.compareAtPrice) * 100)
        : 0;
      productToAdd.img = this.selectedVariant.image?.url || this.product.img;
      
      // Store variant title for display in cart
      productToAdd.title = `${this.product.title} - ${this.getVariantDisplayText()}`;
    }
    
    this.cartService.addCartProduct(productToAdd);
  }

  /**
   * Get display text for variant (e.g., "Large / Blue")
   */
  getVariantDisplayText(): string {
    if (!this.selectedVariant || !this.product.options) return '';
    
    const optionNames = this.product.options.map(o => o.name);
    const values = optionNames.map(name => this.selectedOptions[name]).filter(v => v);
    return values.join(' / ');
  }

  /**
   * Check if product is available for sale
   */
  isAvailableForSale(): boolean {
    return this.selectedVariant?.availableForSale ?? true;
  }
}
