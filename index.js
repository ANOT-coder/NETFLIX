import express from "express";
const app = express();
// to make app understand json
app.use(express.json());

let moviesList = [];

//routes
app.get("/say-HELLO", (req, res) => {
  return res.status(200).send("Hello ..");
});

// add movie
app.post("/movie/add", (req, res) => {
  const newMovie = req.body;
  moviesList.push(newMovie);

  // send response
  return res.status(200).send({ message: "Movie is added successfully." });
});

//get movies
app.get("/movie/list", (req, res) => {
  return res.status(200).send({ message: "success", movies: moviesList });
}); 

//network port and server
const PORT = 8001;


app.listen(PORT, () => {
  console.log("App is listening on the PORT", PORT);
});
