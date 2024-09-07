import React from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";

function Featured() {
  const data = useLoaderData();

  return (
    <div>
      <h2 className="text-center text-4xl">Featured Items</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
        {data?.map((item) => (
          <FeaturedCard key={item.id} data={item}></FeaturedCard>
        ))}
      </div>
    </div>
  );
}

export default Featured;
