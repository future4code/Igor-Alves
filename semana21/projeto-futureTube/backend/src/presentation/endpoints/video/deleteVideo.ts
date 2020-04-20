import { Request, Response } from "express";
import { JWTAutentication } from "../../../utils/jwtAutentication"
import { Validators } from "../../../utils/validators";
import { VideoDatabase } from "../../../data/videoDatabase";
import { DeleteVideoUC } from "../../../business/usecases/video/deleteVideo"

export const deleteVideoEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new DeleteVideoUC(new VideoDatabase(), new JWTAutentication(), new Validators());

    const result = await uc.execute({
      token: req.headers.auth as string,
      videoId: req.body.videoId
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    });
  }
};