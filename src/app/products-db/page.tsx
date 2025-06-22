import { getProducts } from "@/prisma-db";
import ProductDetails from "./product-details";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

type Props = {
  searchParams: Promise<{ query?: string }>;
};

async function ProductsDBPage({ searchParams }: Props) {
  const { query } = await searchParams;

  const products: Product[] = await getProducts(query);

  return <ProductDetails products={products} />;
}

export default ProductsDBPage;
