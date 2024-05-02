const mongoose = require("mongoose");



const MovieSchema = new mongoose.Schema(
  {
    
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default:0,
      required: true,
    },
    
    actors: [{
        type: String,
        ref: "Actor",
        required: true,
      }],
    producer:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producer",
      required:true
    }

  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", MovieSchema);


module.exports = {
  Movie
};
