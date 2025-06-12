import fs from "fs";
import ClientComponentOne from "@/components/ClientComponentOne";

function ServerComponentOne() {
  fs.readFileSync("src/components/ServerComponentOne.tsx", "utf-8");

  return (
    <>
      <h1>Server Component One</h1>
      {/*<ServerComponentTwo />*/}
      <ClientComponentOne />
    </>
  );
}

export default ServerComponentOne;
