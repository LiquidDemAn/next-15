"use client";

import { useRouter } from "next/navigation";

const OrderProductPage = () => {
  const router = useRouter();
  const handleClick = () => router.push("/");

  return (
    <>
      <h1>OrderProductPage</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
};

export default OrderProductPage;
