import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editMovie, getAllMovies, getMovieById } from "../slice/movie";
import { getAllActors } from "../slice/actor";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { isNumber, validateActors, validateBlankValue, validateDescription, validateUserName } from "../helpers/formValidators";

function useHomePage() {
  const dispatch = useDispatch();
const intialsFormData={
  title: "",
  description: "",
  rating: 0,
  actors: "",
  producer: "",
}
  const [isOpen, setIsOpen] = useState(false);
  const [editMovieId, setEditMovieId] = useState("");
  const [movieDetails, setMovieDetails] = useState(intialsFormData);

  const { movieList, onAddMovieSuccess, movieData } = useSelector(
    (state) => state.movie
  );
  const { actorList } = useSelector((state) => state.actor);
  const [isMovieDataLoading, setIsMovieDataLoading] = useState(false);
  const navigate = useNavigate();
const [formErrors,setFormErrors]=useState(null)
  useEffect(() => {
    onGetAllMovies();
    onGetAllActors();
  }, []);

  useEffect(() => {
    if (editMovieId) {
      onGetMovieById();
    }
  }, [editMovieId]);

  useEffect(() => {
    if(movieData){
      const movieNames = Array.isArray(movieData?.actors) && movieData?.actors.map((movie) => movie.name)||[];
      const movieNamesString = movieNames.join(",");
      setMovieDetails({
        ...movieData,
        actors: movieNamesString,
        producer: movieData?.producer?.name,
      });
    }
  }, [movieData]);
  const onGetAllMovies = async () => {
    await dispatch(getAllMovies());
  };

  const onGetAllActors = async () => {
    await dispatch(getAllActors());
  };
  const onGetMovieById = async () => {
    const data = { movieId: editMovieId };
    await dispatch(getMovieById(data));
    setIsMovieDataLoading(false);
  };
  const openPopup = (movie) => {
    setIsMovieDataLoading(true);

    setIsOpen(true);
    setEditMovieId(movie?._id);
  };

  const closePopup = () => {
    setIsOpen(false);
    setEditMovieId("");
   setMovieDetails(intialsFormData)
    setFormErrors(null);  
  };

  const handleOuterClick = (e) => {
    if (e.target.id === "popup") {
      setIsOpen(false);
    }
  };
  const onHandleMovieFeilds = (e) => {
    setMovieDetails({ ...movieDetails, [e.target.name]: e.target.value });
  };

  const handleMovieSubmit = async (e) => {
    const actorIds = findactorIds(actorList, movieDetails?.actors);
    const data = { ...movieDetails, actors: actorIds };
    const validationErrors = {};

    Object.keys(data).map((key) => {
      if (key !== "role") {
        return validateBlankValue(data[key])
          ? (validationErrors[key] = `Please Enter the ${key}`)
          : null;
      } else {
        return;
      }
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
      if (!validateActors(data.actors)) {
        validationErrors.actors = "Please Enter the Valid names separated by ,";
      }
      if (!validateDescription(data.producer)) {
        validationErrors.producer = "Please Enter the Valid Name";
      }

      
    
      setFormErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {

    // await dispatch(editMovie({data,id:editMovieId}));
    // onGetAllMovies();
    // closePopup();
    }
  };
  const findactorIds = (actorList, inputArr) => {
    let actorIds = [];
    const actorArr =
      inputArr.length > 0
        ? inputArr
            .trim()
            .split(",")
            .map((item) => item.trim())
        : [];
    actorArr.forEach((name) => {
      const actor = actorList.find((actor) => actor?.name === name);
      if (actor) {
        actorIds.push(actor._id);
      }
    });
    return actorIds;
  };
  const toNavigate = () => {
    navigate("/createPage");
  };
 
  const logout =()=>{
    Cookies.remove('token');
    navigate("/login");
  }
  return {
    movieList,
    openPopup,
    closePopup,
    formErrors,
    handleOuterClick,
    isOpen,
    onHandleMovieFeilds,
    handleMovieSubmit,
    movieData,
    movieDetails,
    isMovieDataLoading,
    toNavigate,
   
    logout
  };
}

export default useHomePage;
