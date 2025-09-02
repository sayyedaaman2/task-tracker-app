import express from 'express';
import type { Application } from 'express';
import cors from 'cors';

import routes from './routes'
const app:Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))


// Routes

// Root routes
app.get("/",(req,res)=>{
    res.send("Task Tracker API is running 🚀")
})
app.use('/',routes)

export default app;