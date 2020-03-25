import { Request, Response } from "express";
import { CreatePostUC } from "../../../business/usecases/post/createPost";
import { PostDB } from "../../../data/postDB";
import { JWTAutentication } from "../../../utils/jwtAutentication";


export const creatPostEndpoint = async (req: Request, res: Response) => {
  try {
    const makeFriendshipUC = new CreatePostUC(new PostDB(), new JWTAutentication());

    const result = await makeFriendshipUC.execute({
      token: req.headers.auth as string,
      picture: req.body.picture,
      description: req.body.description,
      type: req.body.type
    });
    
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};