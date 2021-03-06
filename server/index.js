import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';


dotenv.config();

const app = express();


//setting body parser to send our request
app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());


//all postRoutes routes are start with /posts
app.use('/posts',postRoutes);

//all auth route start with /user
app.use('/user',userRoutes)

//db connection
const CONNECTION_URL = process.env.APP_CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT , () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message))

