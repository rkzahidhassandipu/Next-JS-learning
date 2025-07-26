import MealSearch from "@/Components/MealSearch";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

const robot = Oswald({
  weight: ["400"],
  subsets: ["latin"]
})

export const metadata = {
  title: "All Meals",
  description: "Meals loaded from MealDB API"
}

const Page = async ({ searchParams }) => {
  const query = searchParams;

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      return data.meals || [];
    } catch (error) {
      console.error("Failed to fetch meals:", error);
      return [];
    }
  };

  const meals = await fetchMeals();

  return (
    <div className="p-6">
      <div>
        <MealSearch />
      </div>

      {meals.length === 0 ? (
        <p className="text-gray-500 mt-4">No meals found for "{query.search}"</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {meals.map((singleMeal) => (
            <div 
              key={singleMeal.idMeal}
              className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition-all ${robot.className}`}
            >
              <Image
                src={singleMeal.strMealThumb}
                alt={singleMeal.strMeal} width={641} height={641}
                className=" object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold">{singleMeal.strMeal}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {singleMeal.strInstructions}
              </p>

              <Link className="text-blue-600" href={`/meals/${singleMeal.idMeal}`}>Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
