const mongoose = require("mongoose");


const ProducerSchema = new mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
    }, DOB: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: false,
      }],

  },
  { timestamps: true }
);




const Producer = mongoose.model("Producer", ProducerSchema);

module.exports = {
  Producer
};
