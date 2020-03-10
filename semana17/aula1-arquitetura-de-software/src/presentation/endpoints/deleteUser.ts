import { Request, Response } from "express";
import { DeleteUserUC } from "../../business/usecase/deleteUser";
import { UserDB } from "../../data/userDataBase";

export const deleteUserEndpoint = async (req: Request, res: Response) => {
  try {
    const deleteUserUC = new DeleteUserUC(new UserDB());

    const result = await deleteUserUC.execute({
      id: req.params.id,
    })

    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
      ...err
    });
  }
};