// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://rodriguesjunior:<password>@cluster0.5xgjhcn.mongodb.net/?retryWrites=true&w=majority";

// const mongoose = require("mongoose");

// const connectToDatabase = async () => {
//   await mongoose.connect(
//     `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.5xgjhcn.mongodb.net/?retryWrites=true&w=majority`,
//     (error) => {
//       if (error) {
//         return console.log(
//           "Ocorreu um erro ao se conecatr com o banco de dados: ",
//           error
//         );
//       }

//       return console.log("Conexão ao banco de dados realizada com sucesso!");
//     }
//   );
// };

const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.5xgjhcn.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
}

// connectToDatabase();

module.exports = connectToDatabase;
