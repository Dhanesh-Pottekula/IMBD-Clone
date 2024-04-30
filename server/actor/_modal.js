const mongoose = require("mongoose");

const ActorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true
    },
    image: {
      type: String,
      required: false,
    },
    movies: [
      {
        type: String,
        ref: "Movie",
        required: false,
      },
    ],
  },
  { timestamps: true }
);

const Actor = mongoose.model("Actor", ActorSchema);

module.exports = {
  Actor,
};
