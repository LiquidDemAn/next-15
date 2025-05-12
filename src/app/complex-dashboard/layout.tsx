import { FC, PropsWithChildren, ReactNode } from "react";

type Props = {
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
};

const ComplexDashboardLayout: FC<PropsWithChildren<Props>> = ({
  children,
  users,
  revenue,
  notifications,
}) => {
  return (
    <>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
};

export default ComplexDashboardLayout;
