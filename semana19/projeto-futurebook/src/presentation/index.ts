import express from "express";
import { signupEndpoint } from "./endpoints/user/signup";
import { loginEndpoint } from "./endpoints/user/login";
import { makeFriendshipEndpoint } from "./endpoints/user/makeFriendship";
import { undoFriendshipEndpoint } from "./endpoints/user/undoFriendship";
import { creatPostEndpoint } from "./endpoints/post/createPost";


const app = express();
app.use(express.json());


app.post('/signup', signupEndpoint);

app.post('/login', loginEndpoint);

app.post('/friendship/make', makeFriendshipEndpoint);

app.post('/friendship/undo', undoFriendshipEndpoint);

app.post('/post/create', creatPostEndpoint);


export default app;