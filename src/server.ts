import {yellow} from "colors";
import express, { Request, Response, NextFunction } from "express";
import { connectDB } from "./config/db";
import path from "path";
import cors from "cors";
import transaction from "./routes/transaction";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();


const app = express();

app.use(express.json());

app.use(cors());


//MongoDB Connection
connectDB();

//Route Middleware
app.use("/api/v1/transactions", transaction);

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
    app.use(express.static("/client/build"));

    app.get("*", (req: Request, res: Response) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));
}


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode on ${PORT}`)
})