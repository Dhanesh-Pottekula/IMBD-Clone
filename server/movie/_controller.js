const { Producer } = require("../producer/_modal");
const { Movie } = require("./_modal");

const MovieController = {
  getMovies: async (req, res) => {
    try {
      const movies = await Movie.find({}).populate("actors");
      if (!movies) {
        return res.status(400).json({
          error: "Unable to fetch movie list.",
        });
      }

      return res.status(200).json({
        message: "Restaurant movies fetched successfully.",
        data: movies,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "Internal server error",
        errorDetails: error,
      });
    }
  },
  addMovie: async (req, res) => {
    const { title, description, rating, actors, producer } = req.body;
  
    const producerdoc = await Producer.findOne({name:producer})
    const producerId=producerdoc._id
    if(producerId){
      const movie =  new Movie({
        title,
        description,
        rating,
        actors,
        producer:producerId,
      });
      const savedMovie = await movie.save()
      if (!savedMovie) {
        return res.status(400).json({
          error: "Unable to Add Movie.",
        });
      }
      else{
        return res.status(201).json({message:"created movie ",data:savedMovie})
      }
    }else{
      return res.status(500).json({error:"mention correct name of producer "})
    }
    
  },
};

module.exports = { MovieController };
