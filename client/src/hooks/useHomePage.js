import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../slice/movie";
import { getAllActors } from "../slice/actor";
function useHomePage() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [editMovieId,setEditMovieId]=useState("")
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    description: "",
    rating: 0,
    actors: [],
    producer: "",
  });

  const { movieList } = useSelector((state) => state.movie);
  const {actorList}=useSelector((state)=>state.actor)

  useEffect(() => {
    onGetAllMovies();
    onGetAllActors()
  }, []);

  useEffect(()=>{
//get the details of the movie and show them in frontend
  },[editMovieId])
  
  const onGetAllMovies = async () => {
    await dispatch(getAllMovies());
  };
  
  const onGetAllActors = async () => {
    await dispatch(getAllActors());
  };

  const openPopup = (movie) => {
    setIsOpen(true);
    setEditMovieId(movie?._id)
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleOuterClick = (e) => {
    if (e.target.id === "popup") {
      setIsOpen(false);
    }
  };
  const onHandleMovieFeilds = (e) => {
    setMovieDetails({ ...movieDetails, [e.target.name]: e.target.value });
  };

  const handleMovieSubmit = async () => {
    const actorIds=findactorIds(actorList,movieDetails?.actors)
    const data = { ...movieDetails,actors:actorIds };
    console.log(data)
    // await dispatch(editMovie(data));
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
    movieList,
    openPopup,
    closePopup,
    handleOuterClick,
    isOpen,
    onHandleMovieFeilds,
    handleMovieSubmit,
  };
}

export default useHomePage;
