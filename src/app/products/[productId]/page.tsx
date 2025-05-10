import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;

  return {
    title: `Product ${productId}`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const { productId } = await params;

  return <div>ProductDetails: {productId}</div>;
};

export default ProductDetails;
