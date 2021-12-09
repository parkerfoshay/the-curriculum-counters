const axios = require("axios");

export async function fetchNumberData(num) {
  const URLdata = ["trivia", "math"];
  let rndNum = Math.floor(Math.random() * URLdata.length);

  let URL = `http://numbersapi.com/${num}/${URLdata[rndNum]}`;

  const { data } = await axios.get(URL);

  return data;
}

export async function fetchSingleFact(num) {
  let URL = `http://numbersapi.com/${num}`;

  const { data } = await axios.get(URL);
  return data;
}

module.exports = { fetchNumberData, fetchSingleFact };
