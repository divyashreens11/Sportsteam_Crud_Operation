import express from "express";
import { createSports, deleteSports, getAllSports, getOneSports, getUpdate } from "../controllers/sportscontrollers.js";

const route = express.Router();

route.post("/create", createSports);//to create
route.get("/getAll", getAllSports);//to retrive
route.get("/getOne/:id", getOneSports );
route.put("/getUpdate/:id",getUpdate);
route.delete("/deleteSports/:id", deleteSports);



export default route;


/*requst -> index.js -> app .use it will go -> then from there route -> from mentioning create function -> goes to controller -> then goes to MDB by .save()...applies for all for CRUD Operations*/
