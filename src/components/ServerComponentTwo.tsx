import fs from "fs";

function ServerComponentTwo() {
  fs.readFileSync("src/components/ServerComponentTwo.tsx", "utf-8");

  return <h1>Server Component Two</h1>;
}

export default ServerComponentTwo;
