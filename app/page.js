import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Learning Next.js 14</h1>
      <Link href="/client" className="capitalize btn btn-accent ">
        get started
      </Link>
    </div>
  );
};
export default HomePage;
