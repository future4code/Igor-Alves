import express, { Request, Response } from "express";
import { createUserEndpoint } from "./endpoints/users/createUser";
import { getAllUsersEndpoint } from "./endpoints/users/getAllUsers";
import { updateUserEndpoint } from "./endpoints/users/updateUser";
import { deleteUserEndpoint } from "./endpoints/users/deleteUser";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users/create", createUserEndpoint)
app.get("/users/all", getAllUsersEndpoint)
app.post("/users/update", updateUserEndpoint)
app.post("/users/delete", deleteUserEndpoint)


export default app;