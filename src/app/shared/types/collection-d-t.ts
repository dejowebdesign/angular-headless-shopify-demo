export interface ICollectionImage {
  url: string;
  altText: string;
}

export interface ICollectionProduct {
  id: number;
  title: string;
  handle: string;
  img: string;
  price: number;
}

export interface ICollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image?: ICollectionImage;
  products?: ICollectionProduct[];
}
