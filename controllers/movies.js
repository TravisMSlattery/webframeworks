const Movie = require('../models/Movie');

exports.show_movies_page = async (req, res) => {

    const movies = await Movie.find({})

    res.render('movies', {

        // pass in movies object so we can use in pug view
        movies
    })
}

exports.delete_movie = async (req, res) => {

    await Movie.remove({
        _id: req.params.id
    })
    res.redirect('/movies')
}

exports.add_movie = async (req, res) => {

    movie = new Movie({
        title: req.body.title,
        year: req.body.year,
        rating: req.body.rating,
        description: req.body.description,
        stock: req.body.stock
    });
    await movie.save();
    res.redirect('/movies')
}





/*
router.get('/rent/:id', async (req, res) => {

   const movieStock = await Movie.find({_id: req.body._id})
   
   const newStock = movieStock.stock - 1


   await Movie.findOneAndUpdate({ id: req.body._id }, { $set: { "stock":  newStock } 


    });
});



router.get('/return', async (req, res) => {

    const movies = await Movie.find({})

    res.render('movies', {

        movies

    })

});

*/