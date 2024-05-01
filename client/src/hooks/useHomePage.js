import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editMovie, getAllMovies, getMovieById } from "../slice/movie";
import { getAllActors } from "../slice/actor";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function useHomePage() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [editMovieId, setEditMovieId] = useState("");
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    description: "",
    rating: 0,
    actors: "",
    producer: "",
  });

  const { movieList, onAddMovieSuccess, movieData } = useSelector(
    (state) => state.movie
  );
  const { actorList } = useSelector((state) => state.actor);
  const [isMovieDataLoading, setIsMovieDataLoading] = useState(false);
  const navigate = useNavigate();

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
      const movieNames = movieData?.actors.map((movie) => movie.name);
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
    console.log(data);
    await dispatch(editMovie({data,id:editMovieId}));
    onGetAllMovies();
    closePopup();
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
