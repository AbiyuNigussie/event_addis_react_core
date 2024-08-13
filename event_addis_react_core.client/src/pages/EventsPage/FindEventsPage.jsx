import React, { useState } from "react";
import Card from "../../components/Cards/Card";

const FindEventsPage = () => {
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
    {
      imgSrc: "src/assets/addis-ababa-min.jpg",
      title: "Harvest Moon Gala: A Night of Elegance and Giving",
      scheduled: "Tuesday • 2:30 AM GMT+3",
      price: "Free",
      postedBy: "ChildMinister",
    },
  ]);
  return (
    <main className="">
      <section className="relative block" style={{ height: "500px" }}>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="absolute top-1/3 mx-10 flex flex-col gap-3">
          <span className="text-white text-4xl font-medium">Events List</span>
          <span className="text-white font-normal text-xl">
            here are listing of event to see what the city is onto
          </span>
        </div>
      </section>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-3 sm:w-full md:px-6">
              <form className="mt-12 flex gap-5 flex-wrap justify-center md:justify-start">
                <div>
                  <div>
                    <span className="font-medium">Search Event</span>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      className="border rounded-md py-1 px-4 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <span className="font-medium">Search Category</span>
                  </div>
                  <div className="mt-2">
                    <select
                      type="text"
                      className="border rounded-md p-1 w-52 outline-none"
                    >
                      <option>Entertainment</option>
                      <option>Online Event</option>
                      <option>Kids Event</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <span className="font-medium">Search By Location City</span>
                  </div>
                  <div className="mt-2">
                    <select
                      type="text"
                      className="border rounded-md p-1 w-52 outline-none"
                    >
                      <option>Addis Ababa</option>
                      <option>Hawassa</option>
                      <option>Mekele</option>
                    </select>
                  </div>
                </div>
                <div className="mt-2 flex items-end gap-5">
                  <button type="reset" className="border px-2 py-1 rounded-md">
                    Reset
                  </button>
                  <button className="text-white px-2 py-1 rounded-md bg-blue-500">
                    Search
                  </button>
                </div>
              </form>
              <div className="mt-10 py-10 border-t border-gray-300">
                <div className="flex gap-5 flex-wrap"></div>
              </div>
              <div className="max-w-screen-xl mx-auto p-0 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                  {lists &&
                    lists.map((each, key) => <Card item={each} key={key} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FindEventsPage;
