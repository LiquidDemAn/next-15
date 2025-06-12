import NavLinks from "@/components/NavLinks";
import NavSearch from "@/components/NavSearch";

const Navbar = () => {
  console.log("Navbar rendered!");

  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};

export default Navbar;
