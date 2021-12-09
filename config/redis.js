require("dotenv").config();

const { promisify } = require("util");
const redis = require("redis");

// connect to redis server
const client = redis.createClient({
  port: process.env.REDPORT
});

module.exports = {
  // wrap redis methods in promises
  get: promisify(client.get).bind(client),
  set: promisify(client.set).bind(client),
};
