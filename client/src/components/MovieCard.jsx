import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
function MovieCard({ movie,openPopup,index }) {
  return (
    <div className=" min-w-60 m-10  w-1/4 flex-wrap rounded-full">
      <div className=" w-full flex flex-row-reverse">
        <button className="text-white bg-green-500 text-sm absolute  p-1 rounded-sm" onClick={()=>openPopup(movie)}>
          <PencilIcon className="h-4 w-4" />
        </button>
      </div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={movie?.title} subheader={movie?.year} />

        <CardMedia
          component="img"
          height="194"
          image={movie?.image||`https://picsum.photos/id/${index}/200/300`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {movie?.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <Typography variant="body1" color={"black"} className=" mb-2">
              {" "}
              Actors
            </Typography>
            {Array.isArray(movie?.actors) &&
              movie?.actors?.map((actor) => actor?.name)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default MovieCard;
