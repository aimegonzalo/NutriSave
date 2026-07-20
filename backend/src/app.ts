import express, { type Express, type Request, type Response } from 'express';
import dotenv from "dotenv";
import userRoutes from "../routes/user";

dotenv.config()

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3000, ()=>{
    console.log(`Connected to port ${PORT}`)
});