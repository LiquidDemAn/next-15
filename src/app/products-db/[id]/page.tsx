import { getProduct } from "@/prisma-db";
import ProductEditForm from "./product-edit-form";
import { Product } from "@/app/products-db/page";
import notFound from "@/app/not-found";

type Props = {
  params: Promise<{ id: string }>;
};

async function ProductsDBEditPage({ params }: Props) {
  const { id } = await params;
  const product: Product | null = await getProduct(parseInt(id));

  if (!product) {
    return notFound();
  }

  return <ProductEditForm product={product} />;
}

export default ProductsDBEditPage;
