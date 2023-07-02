const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 4000;
const axios = require("axios");
const { response } = require("express");
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?";
//LAT Long for Bangalore
const LAT = "12.9716";
const LONG = "77.5946";
const API_KEY = "1b88b1a55371d2eba1d50f9e77fd532c";

const URL = BASE_URL + "lat=" + LAT + "&lon=" + LONG + "&appid=" + API_KEY;
app.get("/", (req, res) => {
  axios
    .get(URL)
    .then((response) => {
      //console.log(response.data);
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
