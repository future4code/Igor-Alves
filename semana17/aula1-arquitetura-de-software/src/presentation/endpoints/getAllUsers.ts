import { Request, Response } from "express";
import { GetAllUsersUC } from "../../business/usecase/getAllUsers";
import { UserDB } from "../../data/userDataBase";

export const getAllUserEndpoint = async (req: Request, res: Response) => {
  try {
    const getAllUser = new GetAllUsersUC(new UserDB());
    const result = await getAllUser.execute();
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};
