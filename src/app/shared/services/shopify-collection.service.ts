import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ShopifyStorefrontService } from './shopify-storefront.service';
import { ICollection, ICollectionProduct } from '../types/collection-d-t';

@Injectable({
  providedIn: 'root'
})
export class ShopifyCollectionService {
  private collections$!: Observable<ICollection[]>;
  private collectionsCache: ICollection[] = [];

  // GraphQL query to fetch all collections with their products
  private static readonly GET_COLLECTIONS_QUERY = `
    query GetCollections($first: Int!) {
      collections(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            image {
              url
              altText
            }
            products(first: 20) {
              edges {
                node {
                  id
                  title
                  handle
                  featuredImage {
                    url
                  }
                  variants(first: 1) {
                    edges {
                      node {
                        price {
                          amount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  // GraphQL query to fetch a single collection by handle
  private static readonly GET_COLLECTION_BY_HANDLE_QUERY = `
    query GetCollection($handle: String!) {
      collection(handle: $handle) {
        id
        title
        handle
        description
        image {
          url
          altText
        }
        products(first: 100) {
          edges {
            node {
              id
              title
              handle
              featuredImage {
                url
              }
              variants(first: 1) {
                edges {
                  node {
                    price {
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  constructor(private storefront: ShopifyStorefrontService) {}

  /**
   * Get all collections with their products
   */
  get collections(): Observable<ICollection[]> {
    if (!this.collections$) {
      this.collections$ = this.storefront.execute<any>(
        ShopifyCollectionService.GET_COLLECTIONS_QUERY,
        { first: 50 }
      ).pipe(
        map((res: any) => (res.collections?.edges || []).map((e: any) => this.mapCollection(e.node))),
        map(collections => {
          this.collectionsCache = collections;
          return collections;
        }),
        shareReplay(1)
      );
    }
    return this.collections$;
  }

  /**
   * Get a single collection by handle
   */
  getCollectionByHandle(handle: string): Observable<ICollection | undefined> {
    return this.storefront.execute<any>(
      ShopifyCollectionService.GET_COLLECTION_BY_HANDLE_QUERY,
      { handle }
    ).pipe(
      map((res: any) => res.collection ? this.mapCollection(res.collection) : undefined),
      shareReplay(1)
    );
  }

  /**
   * Get collection by handle synchronously from cache
   */
  getCollectionByHandleSync(handle: string): ICollection | undefined {
    return this.collectionsCache.find(c => c.handle === handle);
  }

  /**
   * Get products for a specific collection
   */
  getCollectionProducts(collectionHandle: string): Observable<ICollectionProduct[]> {
    return this.getCollectionByHandle(collectionHandle).pipe(
      map(collection => collection?.products || [])
    );
  }

  /**
   * Map Shopify collection node to ICollection
   */
  private mapCollection(node: any): ICollection {
    const products: ICollectionProduct[] = (node.products?.edges || [])
      .map((e: any) => {
        const productNode = e.node;
        const price = productNode.variants?.edges?.[0]?.node?.price?.amount
          ? parseFloat(productNode.variants.edges[0].node.price.amount)
          : 0;
        return {
          id: parseInt(productNode.id.replace('gid://shopify/Product/', ''), 10),
          title: productNode.title || '',
          handle: productNode.handle || '',
          img: productNode.featuredImage?.url || '',
          price
        };
      });

    return {
      id: node.id,
      title: node.title || '',
      handle: node.handle || '',
      description: node.description || '',
      image: node.image ? {
        url: node.image.url || '',
        altText: node.image.altText || ''
      } : undefined,
      products
    };
  }
}
