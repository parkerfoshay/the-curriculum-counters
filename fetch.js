const axios = require("axios");

async function fetchNumberData(num) {
  const URLdata = ["trivia", "math"];
  let rndNum = Math.floor(Math.random() * URLdata.length);

  let URL = `http://numbersapi.com/${num}/${URLdata[rndNum]}`;

  const { data } = await axios.get(URL);

  console.log(URLdata[rndNum]);
  console.log(rndNum);
  console.log(num);
  console.log(data);

  return data
}

fetchNumberData(1000000);

module.exports = {fetchNumberData};