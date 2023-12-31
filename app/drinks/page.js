import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Learning Nextjs 14 | Drinks",
  description: "Happy New Year!",
};
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
const DrinksPage = async () => {
  const res = await fetch(url);
  const resJson = await res.json();
  const data = await resJson.drinks;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  ">
      {data.map(({ strDrinkThumb, idDrink, strGlass }) => {
        return (
          <Link href={`/drinks/${idDrink}`}>
            <Image
              priority
              alt={strGlass}
              className=" rounded-xl transition ease duration-500 hover:scale-105 "
              src={strDrinkThumb}
              width={300}
              height={300}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default DrinksPage;
