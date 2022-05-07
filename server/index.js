const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// %%%%%%%%%%%%% CONFIGS %%%%%%%%%%%%
const PORT = process.env.PORT || 3001
const URI = 'mongodb+srv://read:X8W4IHSuhCvb529w@cluster0.4hm7m.mongodb.net/api?retryWrites=true&w=majority'

// %%%%%%%%%%% CONECTIONS %%%%%%%%%%%
const app = express()
mongoose.connect(URI)

app.use(express.json())
app.use(cors())

// %%%%%%%%%% MOGOOSE MODELS %%%%%%%%%%%%%%%%
const Serie = require('./models/Serie')
const Movie = require('./models/Movie')

// %%%%%%%%%%% GET DATA %%%%%%%%%%%%%

app.get('/api/all', async (req, res) => { // get all data (movies - series)
  const data = []

  try {
    const series = await Serie.find({})
    const movies = await Movie.find({})

    data.push(...series, ...movies)
    res.send(data)

  } catch (err) {
    console.log(err)
  }
})

app.get('/api/movies', async (req, res) => { // get all movies
  const data = []
  
  try {
    const movies = await Movie.find({})

    data.push(...movies)
    res.send(data)

  } catch (err) {
    console.log(err)
  }
})

app.get('/api/series', async (req, res) => { // get all series
  const data = []

  try {
    const series = await Serie.find({})

    data.push(...series)
    res.send(data)

  } catch (err) {
    console.log(err)
  }
})

app.get('/api/series/filter', async (req, res) => {
  const data = []
  const genre = req.query.genre

  try {
    const series = await Serie.find({'tags.generes': `${genre}`})

    data.push(...series)
    res.send(data) 

  } catch (err) {
    console.log(err)
  }

})

app.get('/api/movies/filter', async (req, res) => {
  const data = []
  const genre = req.query.genre

  try {
    const movies = await Movie.find({'tags.generes': `${genre}`})

    data.push(...movies)
    res.send(data) 

  } catch (err) {
    console.log(err)
  }

})

app.listen( PORT, () => console.log(`RUNNING ON PORT: <-- ${PORT} --> `) )