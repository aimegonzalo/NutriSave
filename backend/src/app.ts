import express, { type Express, type Request, type Response } from 'express';
import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3000, ()=>{
    console.log(`Connected to port ${PORT}`)
});