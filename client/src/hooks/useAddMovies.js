import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddMovies, getAllMovies } from "../slice/movie";
import { addProducer } from "../slice/producer";
import { getAllActors, onAddActor } from "../slice/actor";
import { useNavigate } from "react-router-dom";
function useAddMovies() {
  const initialMovieData = {
    title: "",
    description: "",
    rating: 0,
    actors: [],
    producer: "",
  };
  const initialProducerData = {
    name: "",
    movies: [],
  };
  const initialActorData = {
    name: "",
    movies: [],
  };
  const [movieDetails, setMovieDetails] = useState(initialMovieData);
  const [producerDetails, setProducerDetails] = useState(initialProducerData);
  const [actorDetails, setActorDetails] = useState(initialActorData);
  const dispatch = useDispatch();
  const { movieList,onAddMovieSuccess } = useSelector((state) => state.movie);
  const { actorList,addActorSuccess } = useSelector((state) => state.actor);
  const { addproducerSuccess } = useSelector((state) => state.producer);
  const navigate = useNavigate();
  useEffect(() => {
    onGetAllMovies();
    onGetAllActors();
  }, []);
  useEffect(() => {
    console.log(onAddMovieSuccess)
    if(onAddMovieSuccess){
      setMovieDetails({...initialMovieData});
    }
  }, [onAddMovieSuccess]);
  useEffect(() => {
    if(addActorSuccess){
      setActorDetails(initialActorData);
    }
  }, [addActorSuccess]);
  useEffect(() => {
    if(addproducerSuccess){
      setProducerDetails(initialProducerData);
    }
  }, [addproducerSuccess]);
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
    const actorIds = findactorIds(actorList, movieDetails?.actors);
    const data = { ...movieDetails, actors: actorIds };
    await dispatch(AddMovies(data));
  };

  const onHandleProducerFeilds = (e) => {
    setProducerDetails({ ...producerDetails, [e.target.name]: e.target.value });
  };

  const handleProducerSubmit = async () => {
    const movieIds = findMovieIds(movieList, producerDetails?.movies);
    const data = { ...producerDetails, movies: movieIds };
    await dispatch(addProducer(data));
  };

  const onHandleActorFeilds = (e) => {
    setActorDetails({ ...actorDetails, [e.target.name]: e.target.value });
  };

  const handleActorSubmit = async () => {
    const movieIds = findMovieIds(movieList, actorDetails?.movies);
    const data = { ...actorDetails, movies: movieIds };
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
    return movieIds;
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
    return actorIds;
  };
  const toNavigate = () => {
    navigate("/");
  };
  return {
    onHandleMovieFeilds,
    handleMovieSubmit,
    onHandleProducerFeilds,
    handleProducerSubmit,
    handleActorSubmit,
    onHandleActorFeilds,
    toNavigate,
  };
}

export default useAddMovies;
