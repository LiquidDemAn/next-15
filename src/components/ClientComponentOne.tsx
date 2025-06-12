"use client";

import { PropsWithChildren, useState } from "react";

function ClientComponentOne({ children }: PropsWithChildren) {
  const [name, setName] = useState("Batman");

  return (
    <>
      <h1>Client Component One</h1>
      {/*<ClientComponentTwo />*/}
      {children}
    </>
  );
}

export default ClientComponentOne;
