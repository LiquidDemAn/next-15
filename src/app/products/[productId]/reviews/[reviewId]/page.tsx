import { redirect } from "next/navigation";

const getRandomInt = (count: number) => Math.floor(Math.random() * count);

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error showing review");
  }

  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    redirect("/products");
  }

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
};

export default ProductReview;
