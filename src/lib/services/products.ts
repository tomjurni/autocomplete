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

const validateProduct = (product: any): product is Product => {
  return (
    typeof product.id === "number" &&
    typeof product.title === "string" &&
    typeof product.price === "number" &&
    typeof product.description === "string" &&
    typeof product.category === "string" &&
    typeof product.image === "string" &&
    typeof product.rating === "object" &&
    typeof product.rating.rate === "number" &&
    typeof product.rating.count === "number"
  );
};

export const getProducts = async (query: string): Promise<Product[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const filteredProducts = mockProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return filteredProducts;
};

const RECENT_PRODUCTS_KEY = "recent-products";

export const getRecentProducts = (): Product[] => {
  const recentProducts = localStorage.getItem(RECENT_PRODUCTS_KEY);

  if (!recentProducts) {
    return [];
  }

  try {
    const parsedRecentProducts = JSON.parse(recentProducts);
    if (!Array.isArray(parsedRecentProducts)) {
      return [];
    }

    return parsedRecentProducts
      .filter(validateProduct)
      .slice(0, 5) as Product[];
  } catch (error) {
    return [];
  }
};

export const addRecentProduct = async (product: Product) => {
  const recentProducts = getRecentProducts();
  const newRecentProducts = [product, ...recentProducts];

  await new Promise((resolve) => setTimeout(resolve, 1000));

  localStorage.setItem(RECENT_PRODUCTS_KEY, JSON.stringify(newRecentProducts));

  return newRecentProducts;
};
