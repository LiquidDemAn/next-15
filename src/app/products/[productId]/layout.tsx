import { FC, PropsWithChildren } from "react";

const ProductDetailsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      {children}
      <h2>Featured products</h2>
    </div>
  );
};

export default ProductDetailsLayout;
