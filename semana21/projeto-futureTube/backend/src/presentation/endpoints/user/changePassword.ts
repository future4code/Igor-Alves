import { Request, Response } from "express";
import { UserDatabase } from "../../../data/userDatabase";
import { BcryptPassword } from "../../../utils/bcrypt";
import { JWTAutentication } from "../../../utils/jwtAutentication"
import { ChangePasswordUC } from "../../../business/usecases/user/changePassword";
import { Validators } from "../../../utils/validators";


export const changePasswordEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new ChangePasswordUC(new UserDatabase(), new BcryptPassword(), new JWTAutentication(), new Validators());

    const result = await uc.execute({
      token: (req.headers.Authorization || req.headers.authorization) as string,
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    });
  }
}; 