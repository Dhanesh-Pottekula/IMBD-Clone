import React from "react";

import { ExclamationTriangleIcon, TrashIcon } from "@heroicons/react/24/solid";
import useAddMovies from "../hooks/useAddMovies";

export default function AddMovies() {
  const {
    onHandleMovieFeilds,
    handleMovieSubmit,
    onHandleProducerFeilds,
    handleProducerSubmit,
    handleActorSubmit,
    onHandleActorFeilds,
  } = useAddMovies();
  return (
    <>
      <div className="w-full flex">
        {/* movie */}
        <div className="flex flex-col flex-wrap bg-white rounded p-5 min-w-64 w-full">
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter Movie Name"
              name="title"
              onChange={onHandleMovieFeilds}
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
              onChange={onHandleMovieFeilds}
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
              onChange={onHandleMovieFeilds}
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
              onChange={onHandleMovieFeilds}
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
              onChange={onHandleMovieFeilds}
            />

            <div className="flex items-center gap-1 mt-2 text-red">
              <ExclamationTriangleIcon className="h-5 w-5" />
              <span>form</span>
            </div>
          </div>

          <div className="md:w-full lg:w-1/5 p-3 mt-4 min-w-64">
            <button
              className="bg-purple-500 text-white py-2 px-4 w-full rounded"
              onClick={handleMovieSubmit}
            >
              Add Movie
            </button>
          </div>
        </div>
        {/* actress */}
        <div className="flex flex-col flex-wrap bg-white rounded p-5 min-w-64 w-full">
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
            <label className="mb-3 block"> Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter Category Name"
              name="name"
              onChange={onHandleActorFeilds}
            />

            <div className="flex items-center gap-1 mt-2 text-red">
              <ExclamationTriangleIcon className="h-5 w-5" />
              <span>error</span>
            </div>
          </div>
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
            <label className="mb-3 block">Movies</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter Ranking in Number"
              name="movies"
              onChange={onHandleActorFeilds}

            />

            <div className="flex items-center gap-1 mt-2 text-red">
              <ExclamationTriangleIcon className="h-5 w-5" />
              <span>form</span>
            </div>
          </div>

          <div className="md:w-full lg:w-1/5 p-3 mt-4 min-w-64">
            <button className="bg-purple-500 text-white py-2 px-4 w-full rounded" onClick={handleActorSubmit}>
              Add Actor
            </button>
          </div>
        </div>
        {/* producer */}
        <div className="flex flex-col flex-wrap bg-white rounded p-5 min-w-64 w-full">
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
            <label className="mb-3 block"> Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter  Name"
              name="name"
              onChange={onHandleProducerFeilds}
            />

            <div className="flex items-center gap-1 mt-2 text-red">
              <ExclamationTriangleIcon className="h-5 w-5" />
              <span>error</span>
            </div>
          </div>
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
            <label className="mb-3 block">Movies</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder=" enter movie names sparated by ,"
              name="movies"
              onChange={onHandleProducerFeilds}

            />

            <div className="flex items-center gap-1 mt-2 text-red">
              <ExclamationTriangleIcon className="h-5 w-5" />
              <span>form</span>
            </div>
          </div>

          <div className="md:w-full lg:w-1/5 p-3 mt-4 min-w-64">
            <button className="bg-purple-500 text-white py-2 px-4 w-full rounded" onClick={handleProducerSubmit}>
              Add Producer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
