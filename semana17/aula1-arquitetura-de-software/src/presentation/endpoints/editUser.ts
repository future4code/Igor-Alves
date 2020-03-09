import { Request, Response } from "express";
import { GetUserByEmailUC } from "../../business/usecase/getUserByEmail";
import { UserDB } from "../../data/userDataBase";

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const getUserByEmailUC = new GetUserByEmailUC(new UserDB());

    const result = await getUserByEmailUC.execute({
      email: req.query.email
    })

    res.status(200).send({
      msg: "success"
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
