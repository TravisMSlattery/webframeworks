const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movies')

// Movies page that shows movies
router.get('/', movieController.show_movies_page);

// Delete a movie with the delete button
router.delete('/:id', movieController.delete_movie);

// Register
router.get('/add', async (req, res) => { res.render('addMovie') })

// Add movie and post it to the /movies/ page
router.post('/', movieController.add_movie)

module.exports = router;