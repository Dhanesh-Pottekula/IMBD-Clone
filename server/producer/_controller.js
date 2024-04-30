const { Movie, Producer } = require("./_modal");

const ProducerController = {
  getProducers: async (req, res) => {
    try {
      const producer = await Producer.find({})
      if (!producer) {
        return res.status(400).json({
          error: "Unable to fetch movie list.",
        });
      }

      return res.status(200).json({
        message: "Restaurant movies fetched successfully.",
        data: producer,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message || "Internal server error",
        errorDetails: error,
      });
    }
  },
  addProducer: async (req, res) => {
    const { name, movies } = req.body;
  
    const producer =  new Producer({
      name,
      movies,
    });
    const savedProducer = await producer.save()
    if (!savedProducer) {
      return res.status(400).json({
        error: "Unable to Add Movie.",
      });
    }
    else{
      return res.status(201).json({message:" succefully added producer ",data:savedProducer})
    }
  },
};

module.exports = { ProducerController };
