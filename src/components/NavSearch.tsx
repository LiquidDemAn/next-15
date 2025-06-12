"use client";

import { useState } from "react";

const NavSearch = () => {
  const [search, setSearch] = useState("");

  console.log("NavSearch rendered");

  return <div>Nav search input</div>;
};

export default NavSearch;
