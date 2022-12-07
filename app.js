import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuits-controller.js";
const app = express()
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || "mongodb+srv://cs4550:student@cluster0.dbf0scw.mongodb.net/?retryWrites=true&w=majority";//"mongodb://localhost:27017/tuiter";
mongoose.connect(CONNECTION_STRING);
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000)