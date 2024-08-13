import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import apiService from "../../api/apiServices";
const CreateEventPage = () => {
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // apiService
    //   .post("api/event", data)
    //   .then((response) => {
    //     login(response.data);
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.error(error.response.data.errorMessage.errors[0].errorMessage);
    //     setErrorMessage(
    //       error.response.data.errorMessage.errors[0].errorMessage
    //     );
    //   });

    console.log(data);
  };

  useEffect(() => {
    apiService
      .get("/api/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log("Error While Fetching Categories!");
      });
    apiService
      .get("/api/city")
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => {
        console.log("Error While Fetching Cities!");
      });
  }, []);

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
          <span className="text-white text-4xl font-medium">Create Event</span>
          <span className="text-white font-normal text-xl">
            Please fill out the info needed for the event.
          </span>
        </div>
      </section>
      <section className="relative py-16 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-3 sm:w-full md:px-6">
              <div className="mt-12 flex gap-5 flex-wrap justify-center md:justify-start">
                <span className="text-3xl font-serif text-gray-700">
                  Event Form
                </span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-10 py-10 border-t border-gray-300 w-full md:w-1/2">
                  <div className="flex gap-5 flex-wrap">
                    <div className="flex flex-col gap-10 w-full">
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700">Event Title</label>
                        <input
                          type="text"
                          className="flex-2 border border-gray-400 py-2 px-2 rounded-md outline-none"
                          name="title"
                          {...register("title", {
                            required: "* Required",
                          })}
                        />
                        {errors.title && (
                          <span className="text-sm text-red-500">
                            {errors.title.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-md">Date</label>
                        <input
                          type="date"
                          className="border border-gray-400 py-2 px-2 rounded-md outline-none"
                          name="date"
                          {...register("date", {
                            required: "* Required",
                          })}
                        />
                        {errors.date && (
                          <span className="text-sm text-red-500">
                            {errors.date.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-md">Time</label>
                        <input
                          type="time"
                          className="border border-gray-400 py-2 px-2 rounded-md outline-none"
                          name="time"
                          {...register("time", {
                            required: "* Required",
                          })}
                        />
                        {errors.time && (
                          <span className="text-sm text-red-500">
                            {errors.time.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-md">
                          Description*
                        </label>
                        <input
                          type="text"
                          className="border border-gray-400 py-2 px-2 rounded-md outline-none"
                          name="description"
                          {...register("description", {
                            required: "* Required",
                          })}
                        />
                        {errors.desc && (
                          <span className="text-sm text-red-500">
                            {errors.desc.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-md">
                          Organizer*
                        </label>
                        <input
                          type="text"
                          className="border border-gray-400  py-2 px-2 rounded-md outline-none"
                          name="organizer"
                          {...register("organizer", {
                            required: "* Required",
                          })}
                        />
                        {errors.organizer && (
                          <span className="text-sm text-red-500">
                            {errors.organizer.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-md">
                          Contact*
                        </label>
                        <input
                          type="text"
                          className="border border-gray-400  py-2 px-2 rounded-md outline-none"
                          name="contact"
                          {...register("contact", {
                            required: "* Required",
                          })}
                        />
                        {errors.contact && (
                          <span className="text-sm text-red-500">
                            {errors.contact.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-md">
                          Category*
                        </label>
                        <select
                          name="category"
                          className="border border-gray-400  py-2 px-2 rounded-md outline-none"
                          {...register("category", {
                            required: "* Required",
                          })}
                        >
                          {categories.map((item, key) => (
                            <option value={item.categoriesId} key={key}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        {errors.cateogory && (
                          <span className="text-sm text-red-500">
                            {errors.cateogory.message}
                          </span>
                        )}
                      </div>
                      {/* <div className="flex flex-col gap-2">
                      <label className="text-gray-700 text-md">Region</label>
                      <input
                        type="text"
                        className="border border-gray-400  py-2 px-2 rounded-md outline-none"
                      />
                    </div> */}
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-md">City</label>
                        <select
                          name="city"
                          className="border border-gray-400  py-2 px-2 rounded-md outline-none"
                          {...register("city", {
                            required: "* Required",
                          })}
                        >
                          {cities.map((item, key) => (
                            <option value={item.id} key={key}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        {errors.city && (
                          <span className="text-sm text-red-500">
                            {errors.city.message}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-md">
                          Street Name (optional)
                        </label>
                        <input
                          type="text"
                          className="border border-gray-400  py-2 px-2 rounded-md outline-none"
                          {...register("streetName", {})}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700 text-md">
                          Attached Image
                        </label>
                        <input
                          type="file"
                          className="py-2 outline-none"
                          {...register("imageFile", {})}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <button
                          type="submit"
                          className="text-white bg-blue-400 max-w-fit py-2 px-5 rounded-md"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div className="max-w-screen-xl mx-auto p-0 sm:p-10 md:p-16"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreateEventPage;
