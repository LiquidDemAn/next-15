import ClientComponentOne from "@/components/ClientComponentOne";
import ServerComponentOne from "@/components/ServerComponentOne";

function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>
      {/*<ServerComponentOne />*/}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}

export default InterleavingPage;
