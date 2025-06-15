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
  const response = await fetch("https://fakestoreapi.com/products");

  const allProducts = (await response.json()) as Product[];

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return filteredProducts;
};
