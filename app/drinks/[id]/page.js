import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Learning Nextjs 14 | Drinks",
  description: "Happy New Year!",
};
const SingleDrinkPage = async ({ params }) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`;
  const res = await fetch(url);
  const resJson = await res.json();
  const data = await resJson.drinks;
  metadata.title = `Learning Nextjs 14 | ${data[0].strGlass}`;
  return (
    <>
      <Link href="/drinks" className="btn btn-primary mb-5 ">
        Back to drinks
      </Link>
      {data.map(({ strDrinkThumb, idDrink, strGlass, strCategory }) => {
        return (
          <div key={idDrink}>
            <Image
              priority
              alt={strGlass}
              className="rounded-xl transition ease duration-500 hover:scale-105 "
              src={strDrinkThumb}
              width={300}
              height={300}
            />
            <br />
            <h1 className="text-3xl">
              Glass: <span className="text-2xl">{strGlass}</span>
            </h1>
            <p className="text-3xl">
              Category: <span className="text-2xl">{strCategory}</span>
            </p>
          </div>
        );
      })}
    </>
  );
};
export default SingleDrinkPage;
