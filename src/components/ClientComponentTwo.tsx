"use client";

import { useState } from "react";

function ClientComponentTwo() {
  const [name, setName] = useState("Batman");

  return <h1>Client Component Two</h1>;
}

export default ClientComponentTwo;
