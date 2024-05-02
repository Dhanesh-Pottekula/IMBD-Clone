const { Movie } = require("../movie/_modal");
const { Actor } = require("./_modal");

const ActorController = {
  getActors: async (req, res) => {
    try {
      const actors = await Actor.find({})
      if (!actors) {
        return res.status(400).json({
          error: "Unable to fetch actors list.",
        });
      }

      return res.status(200).json({
        message: " actors fetched successfully.",
        data: actors,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "Internal server error",
        errorDetails: error,
      });
    }
  },
  addActor: async (req, res) => {
    const { name, DOB,bio, movies,gender } = req.body;

    try {
      const actor = new Actor({
        name, DOB,bio, movies,gender
      });

      let savedActor = await actor.save();
      await Promise.all(
        movies.map(async (id) => {
          const savedMovie = await Movie.findByIdAndUpdate(
            id,
            { $push: { actors: actor._id } },
            { new: true }
          );
    
        })
      );

      if (!savedActor) {
        return res.status(400).json({
          error: "Unable to addActor.",
        });
      }
      return res.status(200).json({
        message: "Actor added  successfully.",
        data: savedActor,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "Internal server error",
        errorDetails: error,
      });
    }
  },
};

module.exports = { ActorController };
