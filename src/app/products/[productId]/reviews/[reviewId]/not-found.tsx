"use client";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  console.log(pathname);

  return (
    <div>
      <h2>Review {reviewId} Not Found</h2>
    </div>
  );
};

export default NotFound;
