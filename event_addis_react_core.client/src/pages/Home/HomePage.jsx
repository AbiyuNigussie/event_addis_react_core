import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import Card from "../../components/Cards/Card";

const HomePage = () => {
  const [lists, setLists] = useState([
    {
      imgSrc: "src/assets/addis-ababa-min.jpg",
      title: "Harvest Moon Gala: A Night of Elegance and Giving",
      scheduled: "Tuesday • 2:30 AM GMT+3",
      price: "Free",
      postedBy: "ChildMinister",
    },
    {
      imgSrc: "src/assets/addis-ababa-min.jpg",
      title: "Women and inventing in the Victorian Age",
      scheduled: "Tuesday • 2:30 AM GMT+3",
      price: "Free",
      postedBy: "ChildMinister",
    },
    {
      imgSrc: "src/assets/addis-ababa-min.jpg",
      title: "Harvest Moon Gala: A Night of Elegance and Giving",
      scheduled: "Tuesday • 2:30 AM GMT+3",
      price: "Free",
      postedBy: "ChildMinister",
    },
    {
      imgSrc: "src/assets/addis-ababa-min.jpg",
      title: "Harvest Moon Gala: A Night of Elegance and Giving",
      scheduled: "Tuesday • 2:30 AM GMT+3",
      price: "Free",
      postedBy: "ChildMinister",
    },
  ]);

  return (
    <>
      <Header />
      <main>
        <div className="min-h-full flex flex-col sm:px-5">
          <div className="flex items-center justify-between">
            <p className="py-5 px-5 text-2xl text-gray-600">Trending Events</p>
            <a href="#" className="hidden sm:block hover:text-blue-500">
              <p className="text-sm flex items-center">
                See more <ChevronRightIcon className="h-4" />
              </p>
            </a>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap sm:flex-row sm:gap-5">
              {lists &&
                lists.map((each, key) => <Card item={each} key={key} />)}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
