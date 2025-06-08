import "server-only";

export const serverSideFunction = () => {
  console.log("server logic");

  return "server result";
};
