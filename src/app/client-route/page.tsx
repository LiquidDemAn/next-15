"use client";

import React from "react";
import { serverSideFunction } from "@/utils/server-utils";

function ClientRoute() {
  const result = serverSideFunction();

  return <div>ClientRoute: {result}</div>;
}

export default ClientRoute;
