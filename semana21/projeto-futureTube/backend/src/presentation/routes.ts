import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/user/signup";
import { loginEndpoint } from "./endpoints/user/login";
import { changePasswordEndpoint } from "./endpoints/user/changePassword";
import { uploadVideoEndpoint } from "./endpoints/video/uploadVideo";

const app = express();
app.use(express.json()); 


app.post("/signup", signupEndpoint)
app.post("/login", loginEndpoint)
app.post("/changepassword", changePasswordEndpoint)

app.post("/uploadvideo", uploadVideoEndpoint)


export default app;
