const mongoose = require("mongoose");


const ProducerSchema = new mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
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
