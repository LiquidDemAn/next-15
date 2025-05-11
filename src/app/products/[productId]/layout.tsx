import { FC, PropsWithChildren } from "react";

const getRandomInt = (count: number) => Math.floor(Math.random() * count);

const ProductDetailsLayout: FC<PropsWithChildren> = ({ children }) => {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error showing product");
  }

  return (
    <div>
      {children}
      <h2>Featured products</h2>
    </div>
  );
};

export default ProductDetailsLayout;
