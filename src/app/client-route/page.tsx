"use client";

import React from "react";
import { clientSideFunction } from "@/utils/client-utils";

function ClientRoute() {
  // const result = serverSideFunction();
  const result = clientSideFunction();

  return <div>ClientRoute: {result}</div>;
}

export default ClientRoute;
