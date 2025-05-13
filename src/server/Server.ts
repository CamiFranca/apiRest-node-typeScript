import express from "express";
import "dotenv/config";
import router from "./routes";
import "./shared/services/TranslationYup"

const server = express();
server.use(express.json())
server.use(router);




export default server