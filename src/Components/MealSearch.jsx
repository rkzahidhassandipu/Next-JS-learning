"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const MealSearch = ({}) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search for meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4 w-full max-w-md"
      />
    </div>
  );
};

export default MealSearch;
