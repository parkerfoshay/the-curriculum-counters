// require esm
require = require("esm")(module);

// require dotenv
require("dotenv").config();

module.exports = require("./src/app");
