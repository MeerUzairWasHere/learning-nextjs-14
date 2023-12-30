import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-red-500 text-7xl ">This is nextjs</h1>
      <Link className="mx-1" href="/about">About</Link>
      <Link className="mx-1" href="/about/me">me</Link>
      <Link className="mx-1" href="/contact">Contact</Link>
    </div>
  );
};
export default HomePage;
