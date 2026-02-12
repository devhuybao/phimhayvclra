const router = require("express").Router()
const Movie = require("../models/Movie")

router.post("/add", async (req, res) => {
  const movie = new Movie(req.body)
  await movie.save()
  res.json("movie added")
})

router.get("/all", async (req, res) => {
  const movies = await Movie.find()
  res.json(movies)
})

router.get("/:id", async (req, res) => {
  const movie = await Movie.findById(req.params.id)
  res.json(movie)
})

module.exports = router

