// const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

// // require("./modules/path.js");
// // require("./modules/fs");
// // require("./modules/http");

require("./modules/express");

// const person = new Person("Junior");

// //console.log(person.sayMyName());
