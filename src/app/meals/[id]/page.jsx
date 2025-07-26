import MealSearch from "@/Components/MealSearch";

const fetchSingleMeals = async (id) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      return data.meals || [];
    } catch (error) {
      console.error("Failed to fetch meals:", error);
      return [];
    }
  };

  export async function generateMetadata({ params }, parent) {
    // read route params
    const { id } = params
   
    // fetch data
    const singleMeal = await fetchSingleMeals(id)
    console.log(singleMeal)
   
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
   return {
  title: singleMeal[0]?.strMeal || "Meal Details",
  description: singleMeal[0]?.strInstructions?.slice(0, 150) || "Meal instructions",
};

  }
  

const singleMealPage = async ({ params }) => {
  const id = await params;

  

  const singleMeal = singleMeal(id);

  return (
    <div className="p-6">
      <p>{JSON.stringify(singleMeal)}</p>

      
    </div>
  );
};

export default singleMealPage;
