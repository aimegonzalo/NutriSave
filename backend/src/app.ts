import express, { type Express, type Request, type Response } from 'express';
import dotenv from "dotenv";
import userRoutes from "../routes/user";
import cors from "cors"

dotenv.config()

const app: Express = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173"
};

app.use(express.json());

app.use(cors(corsOptions));

app.use("/api/users", userRoutes)


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(3000, ()=>{
    console.log(`Connected to port ${PORT}`)
});