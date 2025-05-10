export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  salePrice?: number;
  images: Image[];
  category: Category;
  tags: string[];
  status: "draft" | "published";
  stockQuantity: number;
  sku: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  createdAt: string;
  updatedAt: string;
}

export interface DigitalProduct {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  salePrice?: number;
  images: Image[];
  category: Category;
  tags: string[];
  status: "draft" | "published";
  fileUrl: string;
  previewImages: Image[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: Image;
  parentCategory?: Category;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id: string;
  url: string;
  alternativeText?: string;
  width: number;
  height: number;
}
