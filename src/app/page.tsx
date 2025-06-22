import Link from "next/link";
import Search from "@/components/Search";
import Counter from "@/components/Counter";

const Home = () => {
  return (
    <>
      <h1>Welcome Home!</h1>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
      <Search />
      <Counter />
    </>
  );
};

export default Home;
