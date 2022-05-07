const { Schema, model } = require('mongoose')

const SerieSchema = new Schema({
  title: {type: String, required: true},
  videoId: {type: String, required: true},
  thumbnail: {type: String, required: true},
  description: {type: String, required: true},
  logo: {type:String},
  tags: { 
    age: {type: String, required: true} ,
    year: {type: String, required: true} ,
    generes: [String] ,
    cast: [String]  
  },
  seasons: [
  {
    id: Number,
    episodes: [
      {
        number: Number,
        title: String,
        duration: String,
        thumbnail: String,
        sypnopsis: String,
        url: String
      }
    ]
  } 
  ]
})

const Serie = model('Serie', SerieSchema)

module.exports = Serie