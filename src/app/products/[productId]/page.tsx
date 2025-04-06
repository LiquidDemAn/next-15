const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;

  return <div>ProductDetails: {productId}</div>;
};

export default ProductDetails;
