// index.js
import swagger from "./doc/swagger.json" assert {type: 'json'}
import swaggerUi from "swagger-ui-express"
import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";
import configurations from "./configs/configs.js"
import allroutes from './route/index.js';
import errorHandler from './middleware/ErrorHandler.js';
import { notfound } from './Error/notfound.js';
const corsOptions={
    allowedHeaders: [ 'Authorization', 'Content-Type'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin:["http://192.168.1.150:8080",""]
}

const app = express();


// Connect to MongoDB
mongoose.connect('mongodb+srv://mireilleirafasha:Mugisha12345@cluster0.4bfpmyu.mongodb.net/taskApp' )
.then(() => console.log('Connected to MongoDB'))
.catch(err => { console.log(err)});
// Middleware
app.use(cors());
app.use(express.json());
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swagger))

// Routes
app.use('/api/v2', allroutes);
//app.use(notfound);

// Start
app.listen(configurations.port,()=>
{
    console.log(`server running on port ${configurations.port}`);
})
app.use(errorHandler)