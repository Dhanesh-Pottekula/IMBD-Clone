import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useHomePage from "../hooks/useHomePage";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

function HomePage() {
  const {
    isOpen,
    movieList,
    openPopup,
    closePopup,
    handleOuterClick,
    onHandleMovieFeilds,
    handleMovieSubmit,
  } = useHomePage();

  const navigate = useNavigate();
  return (
    <div className=" bg-slate-100 text-white min-h-screen">
      <div className=" flex w-screen flex-wrap ">
        {Array.isArray(movieList) &&
          movieList.map((movie) => (
            <MovieCard key={movie?._id} movie={movie} openPopup={openPopup} />
          ))}
        {isOpen && (
          <div
            id="popup"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-8 rounded shadow-lg"
            onClick={handleOuterClick}
          >
            <span
              className="absolute top-0 right-0 cursor-pointer"
              onClick={closePopup}
            ></span>
            <h2 className="text-xl font-bold mb-4 text-black">Edit Movie</h2>
            <div className="md:w-full lg:w-1/4 p-3 min-w-64">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Enter Movie Name"
                name="title"
                // onChange={onHandleMovieFeilds}
              />

              <div className="flex items-center gap-1 mt-2 text-red">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>error</span>
              </div>
            </div>
            <div className="md:w-full lg:w-1/4 p-3 min-w-64">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="description"
                name="description"
                // onChange={onHandleMovieFeilds}
              />

              <div className="flex items-center gap-1 mt-2 text-red">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>form</span>
              </div>
            </div>
            <div className="md:w-full lg:w-1/4 p-3 min-w-64">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="rating"
                name="rating"
                // onChange={onHandleMovieFeilds}
              />

              <div className="flex items-center gap-1 mt-2 text-red">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>form</span>
              </div>
            </div>
            <div className="md:w-full lg:w-1/4 p-3 min-w-64">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Actors"
                name="actors"
                // onChange={onHandleMovieFeilds}
              />

              <div className="flex items-center gap-1 mt-2 text-red">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>form</span>
              </div>
            </div>
            <div className="md:w-full lg:w-1/4 p-3 min-w-64">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Producer"
                name="producer"
                // onChange={onHandleMovieFeilds}
              />

              <div className="flex items-center gap-1 mt-2 text-red">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>form</span>
              </div>
            </div>

            <div className="md:w-full lg:w-1/5 p-3 mt-4 min-w-64">
              <button
                className="bg-purple-500 text-white py-2 px-4 w-full rounded"
                // onClick={handleMovieSubmit}
              >
                Add Movie
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
