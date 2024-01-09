const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
//load env variables
require("dotenv").config();

const app = express();

//to only allow requests from our frontend
// const whitelist = ["http://localhost:3000"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

//middleware that allows us to parse json
//if you place corsOptions in app.use(cors(corsOptions)), it will only allow requests from the whitelist
//prevent other websites from making requests to your API on behalf of other users. Only trusted clients can communicate with server.
app.use(cors());

// '/' = localhost:8000, app.get --> method, '/' --> path/endpoint, => --> callback function
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/convert", (req, res) => {
  const toCurrency = req.query.to_currency;
  const fromCurrency = req.query.from_currency;

  const options = {
    method: "GET",
    url: "https://alpha-vantage.p.rapidapi.com/query",
    params: {
      from_currency: fromCurrency,
      function: "CURRENCY_EXCHANGE_RATE",
      to_currency: toCurrency,
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_ALPHA_VANTAGE_API_KEY,
      "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(
        response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
      );
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/news", (req, res) => {
  const options = {
    method: "GET",
    url: "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
