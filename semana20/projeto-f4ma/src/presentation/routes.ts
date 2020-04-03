import express, { Request, Response } from "express";
import { createBandEndpoint } from "./endpoints/bands/createBand";
import { getBandDetailsEndpoint } from "./endpoints/bands/getBandDetails";
import { createShowEndpoint } from "./endpoints/shows/createShow";
import { getShowsByDayEndpoint } from "./endpoints/shows/getShowsByDay";

const app = express();
app.use(express.json());


app.post("/band/create", createBandEndpoint)
app.get("/band/details", getBandDetailsEndpoint)

app.post("/show/create", createShowEndpoint)
app.get("/show/day", getShowsByDayEndpoint)


export default app;
