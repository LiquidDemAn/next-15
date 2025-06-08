import React, { Suspense } from "react";
import Product from "@/components/Product";
import Reviews from "@/components/Reviews";

function ProductReviews() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<div>Product Loading...</div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Reviews Loading...</div>}>
        <Reviews />
      </Suspense>
    </div>
  );
}

export default ProductReviews;
