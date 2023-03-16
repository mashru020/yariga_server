import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

// /api/v1/properties/create
dotenv.config();

const app = express();
app.use(cors());
app.use(express({limit: '50mb'}));

app.get('/', (req, res)=> {
    res.send({message:'Hello World!'});
})

const startSarver = async () => {
    try {
       connectDB(process.env.MONGODB_URL);

       app.listen(8080,() => console.log('Server started on port http://localhost:8080'))
    } catch (error) {
        console.log(error)
    }
}

startSarver();