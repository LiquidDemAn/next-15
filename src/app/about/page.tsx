import { cookies } from "next/headers";

export const metadata = {
  title: {
    absolute: "About",
  },
};

const About = async () => {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);

  return <div>About Us</div>;
};

export default About;
