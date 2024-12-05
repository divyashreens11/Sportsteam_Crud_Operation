import express from "express";
import route from "./routes/sportsroute.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();   

const app = express();
const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log("DB connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch(error => console.log(error));

app.use("/api", route); //api is a end point


//if you are using nodemon it will reload in terminal automatically after each changes
//we have created .then and .catch becuase first we have connected to database then we have to connect to server , if there is any error catch will handle the error 

