import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useHomePage from "../hooks/useHomePage";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

function HomePage() {
  const {
    isOpen,
    movieDetails,
    movieList,
    formErrors,
    openPopup,
    closePopup,
    handleOuterClick,
    onHandleMovieFeilds,
    handleMovieSubmit,
    ismovieDetailsLoading,
    toNavigate,
    logout,
  } = useHomePage();
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className=" bg-slate-100 text-white min-h-screen">
      <button
        className="fixed top-4 right-4 z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toNavigate}
      >
        {pathname.includes("createPage") ? "HomePage" : "Add movie"}
      </button>

      <button
        className="fixed top-4 left-4 z-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={logout}
      >
        Logout
      </button>
      <div className=" flex w-screen flex-wrap pt-10">
        {Array.isArray(movieList) &&
          movieList.map((movie, index) => (
            <MovieCard
              key={movie?._id}
              movie={movie}
              openPopup={openPopup}
              index={index}
            />
          ))}
        {isOpen &&
          (ismovieDetailsLoading ? null : (
            <div
              id="popup"
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-8 rounded shadow-lg  overflow-y-auto"
              onClick={handleOuterClick}
            >
              <span
                className="absolute top-2 right-2 cursor-pointer h-10 w-10 bg-red-400 flex justify-center items-center rounded-xl"
                onClick={closePopup}
              >
                X
              </span>
              <h2 className="text-xl font-bold mb-4 text-black">Edit Movie</h2>
              <div className="md:w-full lg:w-1/4 p-3 min-w-64">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full text-black"
                  placeholder="Enter Movie Name"
                  name="title"
                  onChange={onHandleMovieFeilds}
                  value={movieDetails?.title}
                />

                {formErrors?.title && (
                  <div className="flex items-center gap-1 mt-2 ">
                    <ExclamationTriangleIcon className="h-5 w-5" />
                    <span  >{formErrors?.title}</span>
                  </div>
                )}
              </div>
              <div className="md:w-full lg:w-1/4 p-3 min-w-64">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full text-black"
                  placeholder="description"
                  name="description"
                  onChange={onHandleMovieFeilds}
                  defaultValue={movieDetails?.description}
                />

                {formErrors?.description && (
                  <div className="flex items-center gap-1 mt-2 text-red-400">
                    <ExclamationTriangleIcon className="h-5 w-5" />
                    <span>{formErrors?.description}</span>
                  </div>
                )}
              </div>
              <div className="md:w-full lg:w-1/4 p-3 min-w-64">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full text-black"
                  placeholder="rating"
                  name="rating"
                  onChange={onHandleMovieFeilds}
                  defaultValue={movieDetails?.rating}
                />

                {formErrors?.rating && (
                  <div className="flex items-center gap-1 mt-2 text-red-400">
                    <ExclamationTriangleIcon className="h-5 w-5" />
                    <span>{formErrors?.rating}</span>
                  </div>
                )}
              </div>
              <div className="md:w-full lg:w-1/4 p-3 min-w-64">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full text-black"
                  placeholder="Actors"
                  name="actors"
                  onChange={onHandleMovieFeilds}
                  defaultValue={movieDetails?.actors}
                />

                {formErrors?.actors && (
                  <div className="flex items-center gap-1 mt-2 text-red-400">
                    <ExclamationTriangleIcon className="h-5 w-5" />
                    <span>{formErrors?.actors}</span>
                  </div>
                )}
              </div>
              <div className="md:w-full lg:w-1/4 p-3 min-w-64">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md p-2 w-full text-black"
                  placeholder="Producer"
                  name="producer"
                  onChange={onHandleMovieFeilds}
                  defaultValue={movieDetails?.producer}
                />

                {formErrors?.producer && (
                  <div className="flex items-center gap-1 mt-2 text-red-400">
                    <ExclamationTriangleIcon className="h-5 w-5" />
                    <span>{formErrors?.producer}</span>
                  </div>
                )}
              </div>

              <div className="md:w-full lg:w-1/5 p-3 mt-4 min-w-64">
                <button
                  className="bg-purple-500 text-white py-2 px-4 w-full rounded"
                  onClick={handleMovieSubmit}
                >
                  Edit Movie
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HomePage;
