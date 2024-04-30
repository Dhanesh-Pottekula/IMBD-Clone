import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddMovies, getAllMovies } from "../slice/movie";
import { addProducer } from "../slice/producer";
import { getAllActors, onAddActor } from "../slice/actor";
function useAddMovies() {
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    description: "",
    rating: 0,
    actors: [],
    producer: "",
  });
  const [producerDetails, setProducerDetails] = useState({
    name: "",
    movies: [],
  });
  const [actorDetails, setActorDetails] = useState({
    name: "",
    movies: [],
  });
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movie);
  const {actorList}=useSelector((state)=>state.actor)

  useEffect(() => {
    onGetAllMovies();
    onGetAllActors()
  }, []);

  const onGetAllMovies = async () => {
    await dispatch(getAllMovies());
  };
  
  const onGetAllActors = async () => {
    await dispatch(getAllActors());
  };


  const onHandleMovieFeilds = (e) => {
    setMovieDetails({ ...movieDetails, [e.target.name]: e.target.value });
  };

  const handleMovieSubmit = async () => {
    const actorIds=findactorIds(actorList,movieDetails?.actors)
    const data = { ...movieDetails,actors:actorIds };
    console.log(data)
    await dispatch(AddMovies(data));
  };

  const onHandleProducerFeilds = (e) => {
    setProducerDetails({ ...producerDetails, [e.target.name]: e.target.value });
  };

  const handleProducerSubmit = async () => {
    const movieIds=findMovieIds(movieList,producerDetails?.movies)
    const data = { ...producerDetails,movies:movieIds};
    await dispatch(addProducer(data));
  };

  const onHandleActorFeilds = (e) => {
    setActorDetails({ ...actorDetails, [e.target.name]: e.target.value });
  };

  const handleActorSubmit = async () => {
    const movieIds=findMovieIds(movieList,actorDetails?.movies)
    const data = { ...actorDetails,movies:movieIds};
    await dispatch(onAddActor(data));
  };
  const findMovieIds = (movieList, inputArr) => {
    let movieIds = [];
    const moviesArr = inputArr
      .trim()
      .split(",")
      .map((item) => item.trim());
    moviesArr.forEach((name) => {
      const movie = movieList.find((movie) => movie?.title === name);
      if (movie) {
        movieIds.push(movie._id);
      }
    });
    return movieIds
  };
  const findactorIds = (actorList, inputArr) => {
    let actorIds = [];
    const actorArr = inputArr
      .trim()
      .split(",")
      .map((item) => item.trim());
      actorArr.forEach((name) => {
      const actor = actorList.find((actor) => actor?.name === name);
      if (actor) {
        actorIds.push(actor._id);
      }
    });
    return actorIds
  };
  
  return {
    onHandleMovieFeilds,
    handleMovieSubmit,
    onHandleProducerFeilds,
    handleProducerSubmit,
    handleActorSubmit,
    onHandleActorFeilds,
  };
}

export default useAddMovies;
