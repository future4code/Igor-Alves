import express, { Request, Response } from "express";
import { signupEndpoint } from "./endpoints/signup";
import { getUserByEmailEndpoint } from "./endpoints/getUserByEmail";
import { getAllUserEndpoint } from "./endpoints/getAllUsers"
import { editUserEndpoint } from "./endpoints/editUser";
import { deleteUserEndpoint } from "./endpoints/deleteUser";

const app = express();
app.use(express.json());

app.post("/signup", signupEndpoint);

app.get("/user", getUserByEmailEndpoint);

app.get("/user/all", getAllUserEndpoint);

app.put("/user/edit", editUserEndpoint);

app.delete("/user/:id", deleteUserEndpoint)

export default app;
