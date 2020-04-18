import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/user/signup";
import { loginEndpoint } from "./endpoints/user/login";
import { changePasswordEndpoint } from "./endpoints/user/changePassword";
import { uploadVideoEndpoint } from "./endpoints/video/uploadVideo";
import { getUserVideosEndpoint } from "./endpoints/video/getUserVideo";
import { updateVideoEndpoint } from "./endpoints/video/updateVideo";
import { deleteVideoEndpoint } from "./endpoints/video/deleteVideo";
import { getAllVideosEndpoint } from "./endpoints/video/getAllVideos";
import { getVideoDetailsEndpoint } from "./endpoints/video/getVideoDetails";

const app = express();
app.use(express.json()); 


app.post("/signup", signupEndpoint)
app.post("/login", loginEndpoint)
app.post("/changepassword", changePasswordEndpoint)

app.post("/video/upload", uploadVideoEndpoint)
app.get("/user/videos", getUserVideosEndpoint)
app.post("/video/update", updateVideoEndpoint)
app.post("/video/delete", deleteVideoEndpoint)
app.post("/video/all", getAllVideosEndpoint)
app.get("/video/details", getVideoDetailsEndpoint)


export default app;
