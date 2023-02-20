const Movie = require('../DB/schema');

const addMovie =async (req, res) => {
    try {
        const { name, description } = req.body;
        let movie = await Movie.find({ Name: name });
        if (movie.length) {
            res.send('movie already added');
        } else {
            let movie = await Movie.create({ Name: name, Description: description });
            movie.save();
            res.send('Movie Added successfully');
        }
    } catch (err) {
        res.send(`Error from server ${err}`);
    }
}

const getAll =async (req, res) => {
    try {
        let movie =await Movie.find({});
        if (movie.length) res.send(movie);
        else res.send('movies not found')
    } catch (err) {
      res.send(`Error from server ${err}`);
    }
}

const getById =async (req, res) => {
      try {
        let movie =await Movie.find({_id:req.query.id})
        if (movie.length) res.send(movie);
        else res.send("movie not found");
      } catch (err) {
        res.send(`Error from server ${err}`);
      }
}

const getByPagination =async (req, res) => {
    try {
        let skip = (req.query.page - 1) * req.query.size;
    let movie =await Movie.find().skip(skip).limit(req.query.size);
    if (movie.length) res.send(movie);
    else res.send("movie not found");
} catch (err) {
    res.send(`Error from server ${err}`);
}
}

module.exports = {
    getAll,
    addMovie,
    getById,
    getByPagination
}