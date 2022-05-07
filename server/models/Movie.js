const { Schema, model } = require('mongoose')

const MovieSchema = new Schema({
  title: {type: String, required: true},
  videoId: {type: String, required: true},
  thumbnail: {type: String, required: true},
  description: {type: String, required: true},
  logo: {type: String},
  tags: { 
    age: {type: String, required: true} ,
    year: {type: String, required: true} ,
    generes: [String] ,
    cast: [String]  
  }
}
)

const Movie = model('Movie', MovieSchema)

module.exports = Movie