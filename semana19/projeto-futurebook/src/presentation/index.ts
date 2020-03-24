import express from "express";
import { signupEndpoint } from "./endpoints/signup";
import { loginEndpoint } from "./endpoints/login";
import { makeFriendshipEndpoint } from "./endpoints/makeFriendship";
import { undoFriendshipEndpoint } from "./endpoints/undoFriendship";


const app = express();
app.use(express.json());


app.post('/signup', signupEndpoint);

app.post('/login', loginEndpoint);

app.post('/makefriendship', makeFriendshipEndpoint)

app.post('/undofriendship', undoFriendshipEndpoint)


export default app;