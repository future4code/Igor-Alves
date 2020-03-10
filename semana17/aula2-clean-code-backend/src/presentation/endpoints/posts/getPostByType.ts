import { Request, Response } from "express";
import { PostDB } from "../../../data/postDataBase";
import { GetPostByTypeUC } from "../../../business/usecase/posts/getPostByType";


export const getPostByTypeEndpoint = async (req: Request, res: Response) => {
  try {
    const getPostBytypeUC = new GetPostByTypeUC(new PostDB());
    const result = await getPostBytypeUC.execute({
      type: req.query.type
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    });
  }
};