"use client";

import "./styles.css";
import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathName = usePathname();

  return (
    <div>
      {navLinks.map(({ name, href }) => {
        const isActive =
          pathName === href || (pathName.startsWith(href) && href !== "/");

        return (
          <Link
            key={href}
            href={href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
