import { mockProducts } from "@/mock/products";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const getProducts = async (query: string): Promise<Product[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const filteredProducts = mockProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return filteredProducts;
};
