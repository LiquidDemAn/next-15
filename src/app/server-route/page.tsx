import React from "react";
import { serverSideFunction } from "@/utils/server-utils";

function ServerRoutePage() {
  const result = serverSideFunction();

  return <div>{result}</div>;
}

export default ServerRoutePage;
