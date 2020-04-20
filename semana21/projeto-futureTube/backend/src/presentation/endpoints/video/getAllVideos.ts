import { Request, Response } from "express";
import { JWTAutentication } from "../../../utils/jwtAutentication";
import { Validators } from "../../../utils/validators";
import { VideoDatabase } from "../../../data/videoDatabase";
import { GetAllVideosUC } from "../../../business/usecases/video/getAllVideos";

export const getAllVideosEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new GetAllVideosUC(
      new VideoDatabase(),
      new JWTAutentication(),
      new Validators()
    );

    const result = await uc.execute({
      token: (req.headers.Authorization || req.headers.authorization) as string,
      page: req.body.page,
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err,
    });
  }
};
