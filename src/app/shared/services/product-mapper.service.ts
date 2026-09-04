import { Injectable } from '@angular/core';
import { IProduct, IProductVariant, IProductOption } from '../types/product-d-t';

@Injectable({
  providedIn: 'root'
})
export class ProductMapperService {
  /**
   * Map a Shopify Storefront product node to the existing IProduct interface.
   * Maps ALL variants and options, not just the first one.
   */
  map(productNode: any): IProduct {
    // Extract numeric product ID from the global ID string
    const id = Number(productNode.id.replace('gid://shopify/Product/', ''));

    // Basic fields
    const title = productNode.title || '';
    const brand = productNode.vendor || '';
    const sm_desc = productNode.description || '';
    const category = productNode.productType || '';
    const parentCategory = '';

    // Images handling – use featuredImage or fallback to first image
    const featured = productNode.featuredImage?.url || (productNode.images?.edges?.[0]?.node?.url ?? '');
    const img = featured;
    const thumb_img = featured;
    const big_img = featured;
    const banner_img = featured;
    const related_images = (productNode.images?.edges || []).map((e: any) => e.node.url).filter((url: string) => !!url);

    // Map ALL variants from Shopify
    const variants: IProductVariant[] = (productNode.variants?.edges || [])
      .map((edge: any) => {
        const node = edge.node;
        const price = Number(node.price?.amount ?? 0);
        const compareAtPrice = node.compareAtPrice?.amount ? Number(node.compareAtPrice.amount) : undefined;
        
        return {
          id: node.id ? node.id.replace('gid://shopify/ProductVariant/', '') : '',
          title: node.title || '',
          availableForSale: node.availableForSale ?? false,
          price,
          compareAtPrice,
          selectedOptions: (node.selectedOptions || []).map((opt: any) => ({
            name: opt.name,
            value: opt.value
          })),
          image: node.image ? {
            url: node.image.url,
            altText: node.image.altText
          } : undefined,
          quantityAvailable: node.quantityAvailable
        };
      });

    // Determine default variant (first available, or first variant)
    const defaultVariant = variants.find(v => v.availableForSale) || variants[0];
    const defaultVariantId = defaultVariant?.id;
    
    // Use default variant for backward compatibility
    const price = defaultVariant?.price ?? 0;
    const old_price = defaultVariant?.compareAtPrice;
    const discount = (old_price && old_price > price) ? Math.round(((old_price - price) / old_price) * 100) : 0;
    const quantity = defaultVariant?.quantityAvailable ?? (defaultVariant?.availableForSale ? 1 : 0);

    // Build options from Shopify product options
    const options: IProductOption[] = (productNode.options || []).map((option: any) => ({
      id: option.id,
      name: option.name,
      values: (option.values || []).map((v: string) => v)
    }));

    // Extract sizes and colors from options for backward compatibility
    const sizes: string[] = options.find(o => /size/i.test(o.name))?.values || [];
    const colors: string[] = options.find(o => /color|colour/i.test(o.name))?.values || [];

    // UI-only flags – default to false
    const trending = false;
    const topRated = false;
    const bestSeller = false;
    const newFlag = false;
    const banner = false;

    // Rating & reviews – not available via Storefront
    const rating = 0;
    const reviews: any[] = [];

    // Details – no direct mapping, provide empty structure
    const details = {
      details_text: '',
      details_list: [],
      details_text_2: ''
    };

    return {
      id,
      img,
      trending,
      topRated,
      bestSeller,
      new: newFlag,
      banner,
      price,
      old_price,
      discount,
      rating,
      status: undefined,
      quantity,
      related_images,
      orderQuantity: undefined,
      sizes,
      weight: undefined,
      dimension: undefined,
      big_img,
      colors,
      thumb_img,
      sm_desc,
      banner_img,
      parentCategory,
      category,
      brand,
      title,
      variantId: defaultVariantId,  // Default variant ID for backward compatibility
      variants,  // NEW: All variants
      options,  // NEW: All options
      details,
      reviews
    };
  }
}
