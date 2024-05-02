import React from "react";

import { ExclamationTriangleIcon, TrashIcon } from "@heroicons/react/24/solid";
import useAddMovies from "../hooks/useAddMovies";
import { useLocation } from "react-router-dom";
import { Switch } from "@mui/material";

export default function AddMovies() {
  const {
    onHandleMovieFeilds,
    handleMovieSubmit,
    onHandleProducerFeilds,
    handleProducerSubmit,
    handleActorSubmit,
    onHandleActorFeilds,
    toNavigate,
    movieFormErrors,
    producerFormErrors,
    actorFormErrors,

  } = useAddMovies();
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <button
        className=" fixed top-4 right-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toNavigate}
      >
        {pathname.includes("createPage") ? " to HomePage" : "Add movie"}
      </button>
      <div className="w-full flex">
        {/* movie */}
        <div className="flex flex-col flex-wrap bg-white rounded p-5 min-w-64 w-full ">
       
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
          <label className="mb-3 block"> Name</label>

            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter Movie Name"
              name="title"
              onChange={onHandleMovieFeilds}
            />

            {movieFormErrors?.title && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{movieFormErrors?.title}</span>
              </div>
            )}
          </div>
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
          <label className="mb-3 block"> Description</label>

            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="description"
              name="description"
              onChange={onHandleMovieFeilds}
            />

            {movieFormErrors?.description && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{movieFormErrors?.description}</span>
              </div>
            )}
          </div>
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
          <label className="mb-3 block"> Rating</label>

            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="rating"
              name="rating"
              onChange={onHandleMovieFeilds}
            />
            {movieFormErrors?.rating && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{movieFormErrors?.rating}</span>
              </div>
            )}
          </div>
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
          <label className="mb-3 block"> Actors</label>

            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Actors"
              name="actors"
              onChange={onHandleMovieFeilds}
            />

            {movieFormErrors?.actors && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{movieFormErrors?.actors}</span>
              </div>
            )}
          </div>
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
          <label className="mb-3 block"> Producer</label>

            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Producer"
              name="producer"
              onChange={onHandleMovieFeilds}
            />

            {movieFormErrors?.producer && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{movieFormErrors?.producer}</span>
              </div>
            )}
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
              placeholder="Enter  Name"
              name="name"
              onChange={onHandleActorFeilds}
            />

            {actorFormErrors?.name && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{actorFormErrors?.name}</span>
              </div>
            )}
          </div>
          <div className="md:w-full lg:w-1/4 p-3 min-w-64 flex justify-between">
            <label className="mb-3 block">Gender </label>
            <label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={onHandleActorFeilds}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={onHandleActorFeilds}
              />
              Female
            </label>
          </div>
          {producerFormErrors?.gender && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{producerFormErrors?.gender}</span>
              </div>
            )}
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
            <label className="mb-3 block"> DOB</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="dd/mm/yyyy"
              name="DOB"
              onChange={onHandleActorFeilds}
            />

            {actorFormErrors?.DOB && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{actorFormErrors?.DOB}</span>
              </div>
            )}
          </div>
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
            <label className="mb-3 block"> Bio</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter  Bio"
              name="bio"
              onChange={onHandleActorFeilds}
            />

            {actorFormErrors?.bio && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{actorFormErrors?.bio}</span>
              </div>
            )}
          </div>

          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
            <label className="mb-3 block">Movies</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter movie names"
              name="movies"
              onChange={onHandleActorFeilds}
            />

            {actorFormErrors?.movies && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{actorFormErrors?.movies}</span>
              </div>
            )}
          </div>

          <div className="md:w-full lg:w-1/5 p-3 mt-4 min-w-64">
            <button
              className="bg-purple-500 text-white py-2 px-4 w-full rounded"
              onClick={handleActorSubmit}
            >
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

            {producerFormErrors?.name && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{producerFormErrors?.name}</span>
              </div>
            )}
          </div>
          <div className="md:w-full lg:w-1/4 p-3 min-w-64 flex justify-between">
           
            <label className="mb-3 block">Gender </label>
            <label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={onHandleProducerFeilds}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={onHandleProducerFeilds}
              />
              Female
            </label>
            
          </div>
          {producerFormErrors?.gender && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{producerFormErrors?.gender}</span>
              </div>
            )}
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
            <label className="mb-3 block"> DOB</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="dd/mm/yyyy"
              name="DOB"
              onChange={onHandleProducerFeilds}
            />

            {producerFormErrors?.DOB && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{producerFormErrors?.DOB}</span>
              </div>
            )}
          </div>
          <div className="md:w-full lg:w-1/4 p-3 min-w-64">
            <label className="mb-3 block"> BIO</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter  BIO"
              name="bio"
              onChange={onHandleProducerFeilds}
            />

            {producerFormErrors?.bio && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{producerFormErrors?.bio}</span>
              </div>
            )}
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

            {producerFormErrors?.movies && (
              <div className="flex items-center gap-1 mt-2 text-red-400">
                <ExclamationTriangleIcon className="h-5 w-5" />
                <span>{producerFormErrors?.movies}</span>
              </div>
            )}
          </div>

          <div className="md:w-full lg:w-1/5 p-3 mt-4 min-w-64">
            <button
              className="bg-purple-500 text-white py-2 px-4 w-full rounded"
              onClick={handleProducerSubmit}
            >
              Add Producer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
