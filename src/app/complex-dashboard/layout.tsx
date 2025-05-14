import { FC, PropsWithChildren, ReactNode } from "react";

type Props = {
  login: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
};

const ComplexDashboardLayout: FC<PropsWithChildren<Props>> = ({
  children,
  login,
  users,
  revenue,
  notifications,
}) => {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return (
      <div>
        <div>{children}</div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </div>
    );
  }

  return login;
};

export default ComplexDashboardLayout;
