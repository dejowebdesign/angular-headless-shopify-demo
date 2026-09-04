import { Injectable } from '@angular/core';
import { IProduct } from '../types/product-d-t';

@Injectable({
  providedIn: 'root'
})
export class ProductMapperService {
  /**
   * Map a Shopify Storefront product node to the existing IProduct interface.
   * All fields not provided by Shopify are given safe defaults.
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

    // Variants – use first variant as default
    const firstVariant = productNode.variants?.edges?.[0]?.node || {};
    const price = Number(firstVariant.price?.amount ?? 0);
    const old_price = firstVariant.compareAtPrice?.amount ? Number(firstVariant.compareAtPrice.amount) : undefined;
    const discount = (old_price && old_price > price) ? Math.round(((old_price - price) / old_price) * 100) : 0;
    const quantity = firstVariant.quantityAvailable !== undefined ? Number(firstVariant.quantityAvailable) : (firstVariant.availableForSale ? 1 : 0);

    // Extract variant ID for Shopify Cart API
    const variantId = firstVariant.id ? firstVariant.id.replace('gid://shopify/ProductVariant/', '') : undefined;

    // Selected options for sizes and colors
    const selectedOptions = firstVariant.selectedOptions || [];
    const sizes = selectedOptions.filter((o: any) => /size/i.test(o.name)).map((o: any) => o.value);
    const colors = selectedOptions.filter((o: any) => /color|colour/i.test(o.name)).map((o: any) => o.value);

    // UI‐only flags – default to false
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
      variantId,  // <-- Added for Shopify Cart API
      details,
      reviews
    };
  }
}