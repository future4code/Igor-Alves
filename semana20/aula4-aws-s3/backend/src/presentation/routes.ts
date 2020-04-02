import express, { Request, Response } from "express";
import { uploadFileEndpoint } from "./endpoints/uploadFile";
import fileUpload from "express-fileupload";

const app = express();
app.use(express.json()); // Linha mágica (middleware)
app.use(fileUpload());
app.post("/uploadFile", uploadFileEndpoint);
export default app;
