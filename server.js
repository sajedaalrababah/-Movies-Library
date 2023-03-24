'use strict';
const express = require("express");
const movieData= require('./data.json')
const app = express();
const port =3000

app.get("/", handleFirstRoute);
app.get("/favorite", handleFavoritePage);
app.get('/example',errorHandler2)
app.use("*", handleNtFoundError)


function handleFirstRoute(req, res) {
    let result = [];
    let newMovie = new Movies(movieData.title, movieData.poster_path, movieData.overview);
    result.push(newMovie);
    res.json(result);
}


function handleFavoritePage(req, res) {
   res.send("Welcome to Favorite Page");
}

function handleNtFoundError(req, res){
    res.status(404).send("not found")
}

function errorHandler2(req,res){
    axios.get('https://example.com')
    .then((result)=> {
    res.json(result);
    })
    .catch((error)=> {
        res.status(500).send("Sorry, something went wrong")
    });
}



function Movies(title, poster_path, overview) {
    this.title = title;
    this.poster_path = poster_path;
    this.overview = overview;


}








app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })





















