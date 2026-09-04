export interface IProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: number;
  compareAtPrice?: number;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  image?: {
    url: string;
    altText?: string;
  };
  quantityAvailable?: number;
}

export interface IProductOption {
  id?: string;
  name: string;
  values: string[];
}

export interface IProduct {
    id: number;
    img: string;
    trending?: boolean;
    topRated?: boolean;
    bestSeller?: boolean;
    new?: boolean;
    banner?: boolean;
    price:number;
    old_price?:number;
    discount?:number;
    rating?:number;
    status?:string;
    quantity:number;
    related_images: string[];
    orderQuantity?: number;
    sizes: string[];
    weight?: number;
    dimension?: string;
    big_img?: string;
    colors: string[];
    thumb_img: string;
    sm_desc: string;
    banner_img?: string;
    parentCategory: string;
    category: string;
    brand: string;
    title: string;
    variantId?: string;
    // NEW: Variant selection support
    variants?: IProductVariant[];
    options?: IProductOption[];
    selectedOptions?: { [key: string]: string };
    details: {
      details_text: string;
      details_list: string[];
      details_text_2: string;
    };
    reviews:{
      img: string;
      name: string;
      time: string;
      rating: number;
      review_desc: string;
    }[]
}
