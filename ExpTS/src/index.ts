import dotenv from "dotenv";
import fs from "node:fs/promises";
import http from "node:http";
import validateEnv from './utils/validateEnv.js';
import express, { Request, Response } from "express";
import morgan from 'morgan';

dotenv.config({ quiet: true, path: `.env` });
const app = express();
validateEnv();
const PORT = process.env.PORT ?? 3333;
app.use(morgan('short'));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world !");
});

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});
