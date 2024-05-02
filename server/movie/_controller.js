const { Producer } = require("../producer/_modal");
const { Movie } = require("./_modal");


const MovieController = {
  getMovies: async (req, res) => {
    try {
      const movies = await Movie.find({}).populate("actors producer");
      if (!movies) {
        return res.status(400).json({
          error: "Unable to fetch movie list.",
        });
      }

      return res.status(200).json({
        message: " movies fetched successfully.",
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

    const producerdoc = await Producer.findOne({ name: producer });
    const producerId = producerdoc?._id;
    
    if (producerId) {
      const movie = new Movie({
        title,
        description,
        rating,
        actors,
        producer: producerId,
      });
      const savedMovie = await movie.save();
      if (!savedMovie) {
        return res.status(400).json({
          error: "Unable to Add Movie.",
        });
      } else {
        return res
          .status(201)
          .json({ message: "created movie ", data: savedMovie });
      }
    } else {
      return res
        .status(500)
        .json({ error: "mention correct name of producer " });
    }
  },
  editMovie: async (req, res) => {
    try {
      const { title, description, rating, actors, producer } = req.body;
      const id = req.params.id.trim();
      const producerdoc = await Producer.findOne({ name: producer });
      const producerId = producerdoc?._id;
      if (producerId) {
        const updateData = {
          title,
          description,
          rating,
          actors,
          producer: producerId,
        };
        await Movie.findByIdAndUpdate({ _id: id }, updateData, { new: true })
          .then((savedMovie) => {
            return res
              .status(201)
              .json({ message: " movie updated ", data: savedMovie });
          })
          .catch((error) => {
            return res.status(400).json({
              error: error,
            });
          });
      } else {
        return res
          .status(500)
          .json({ error: "mention correct name of producer " });
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  getMovieById: async (req, res) => {
    const { movieId } = req.body;
    try {
      const movies = await Movie.findById(movieId).populate("actors producer");
      if (!movies) {
        return res.status(400).json({
          error: "Unable to fetch movie list.",
        });
      }

      return res.status(200).json({
        message: " movies fetched successfully.",
        data: movies,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "Internal server error",
        errorDetails: error,
      });
    }
  },
};

module.exports = { MovieController };
