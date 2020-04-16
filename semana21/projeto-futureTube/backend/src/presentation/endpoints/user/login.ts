import { Request, Response } from "express";
import { LoginUC } from "../../../business/usecases/user/login";
import { UserDatabase } from "../../../data/userDatabase";
import { BcryptPassword } from "../../../utils/bcrypt";
import { JWTAutentication } from "../../../utils/jwtAutentication"
import { Validators } from "../../../utils/validators";


export const loginEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new LoginUC(new UserDatabase(), new JWTAutentication(), new BcryptPassword(), new Validators());

    const result = await uc.execute({
      email: req.body.email,
      password: req.body.password
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    });
  }
};  