import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddMovies, getAllMovies } from "../slice/movie";
import { addProducer } from "../slice/producer";
import { getAllActors, onAddActor } from "../slice/actor";
import { useNavigate } from "react-router-dom";
import { isNumber, validateActors, validateBlankValue, validateDescription, validateProducer, validateUserName } from "../helpers/formValidators";
function useAddMovies() {
  const initialMovieData = {
    title: "",
    description: "",
    rating: 0,
    actors: "",
    producer: "",
    
  };
  const initialProducerData = {
    name: "",
    DOB:"",
    bio:"",
    gender:"",
    movies: "",
  };
  const initialActorData = {
    name: "",
    DOB:"",
    bio:"",
    gender:"",
    movies: "",
  };
  const [movieDetails, setMovieDetails] = useState(initialMovieData);
  const [producerDetails, setProducerDetails] = useState(initialProducerData);
  const [actorDetails, setActorDetails] = useState(initialActorData);
  const dispatch = useDispatch();
  const { movieList,onAddMovieSuccess } = useSelector((state) => state.movie);
  const { actorList,addActorSuccess } = useSelector((state) => state.actor);
  const { addproducerSuccess } = useSelector((state) => state.producer);
const [movieFormErrors,setMovieFormErrors]=useState(null)
const [actorFormErrors,setActorFormErrors]=useState(null)
const [producerFormErrors,setProducerFormErrors]=useState(null)

  const navigate = useNavigate();
  useEffect(() => {
    onGetAllMovies();
    onGetAllActors();
  }, []);
  useEffect(() => {
    if(onAddMovieSuccess){
      setMovieDetails(initialMovieData);
      onGetAllMovies()
    }
  }, [onAddMovieSuccess]);
  useEffect(() => {
    if(addActorSuccess){
      setActorDetails(initialActorData);
      onGetAllActors()
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
    const validationErrors = {};

    Object.keys(data).map((key) => {
     
        return validateBlankValue(data[key])
          ? (validationErrors[key] = `Please Enter the ${key}`)
          : null;
     
    });

      if (!validateUserName(data.title)) {
        validationErrors.title = "Please Enter the Valid Username";
      }
      
      if (!validateDescription(data.description)) {
        validationErrors.description = "Please Enter the Valid description";
      }
      if (!isNumber(data.rating)) {
        validationErrors.rating = "Please Enter the Valid number";
      }
      if (!validateActors( movieDetails?.actors)) {
        validationErrors.actors = "Please Enter the Valid names separated by ,";
      }
      if (!validateProducer(data.producer)) {
        validationErrors.producer = "Please Enter the Valid Name";
      }

      setMovieFormErrors(validationErrors);
      
      console.log(validationErrors)
    if (Object.keys(validationErrors).length === 0) {

      await dispatch(AddMovies(data));
    }
  };

  const onHandleProducerFeilds = (e) => {
    setProducerDetails({ ...producerDetails, [e.target.name]: e.target.value });
  };

  const handleProducerSubmit = async () => {
    const movieIds = findMovieIds(movieList, producerDetails?.movies);
    const data = { ...producerDetails, movies: movieIds };
    const validationErrors = {};
    if (!validateUserName(data.name) && validateBlankValue(data.name)) {
      validationErrors.name = "Please Enter the Valid Name";
    }
    
    if (validateBlankValue(data.DOB)) {
      validationErrors.DOB = "Please Enter the Valid DOB";
    }
    if (validateBlankValue(data.gender)) {
      validationErrors.gender = "specify your gender";
    }
    
    if (!validateDescription(data.bio) && validateBlankValue(data.bio)) {
      validationErrors.bio = "Please Enter the Valid bio";
    }
    
    if (!validateActors( producerDetails?.movies) && producerDetails?.movies) {
      validationErrors.movies = "Please Enter the Valid names separated by ,";
    }
    setProducerFormErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
      await dispatch(addProducer(data));
    }
  };

  const onHandleActorFeilds = (e) => {
  
      setActorDetails({ ...actorDetails, [e.target.name]: e.target.value });
  };

  const handleActorSubmit = async () => {
    const movieIds = findMovieIds(movieList, actorDetails?.movies);
    const data = { ...actorDetails, movies: movieIds };
    const validationErrors = {};
    if (!validateUserName(data.name) && validateBlankValue(data.name)) {
      validationErrors.name = "Please Enter the Valid Name";
    }
    
    if (validateBlankValue(data.DOB)) {
      validationErrors.DOB = "Please Enter the Valid DOB";
    }
    
    if (!validateDescription(data.bio) && validateBlankValue(data.bio)) {
      validationErrors.bio = "Please Enter the Valid bio";
    }
    
    if (!validateActors( actorDetails?.movies) && actorDetails?.movies) {
      validationErrors.movies = "Please Enter the Valid names separated by ,";
    }
    setActorFormErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
    await dispatch(onAddActor(data));
  }
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
    movieFormErrors,
    producerFormErrors,
    actorFormErrors,
  
  };
}

export default useAddMovies;
