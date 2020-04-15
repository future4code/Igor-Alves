import { Request, Response } from "express";
import { SignupUC } from "../../../business/usecases/user/signup";
import { UserDatabase } from "../../../data/userDatabase";
import { BcryptPassword } from "../../../utils/bcrypt";
import { JWTAutentication } from "../../../utils/jwtAutentication"


export const signupEndpoint = async (req: Request, res: Response) => {
  try {
    const uc = new SignupUC(new UserDatabase(), new JWTAutentication(), new BcryptPassword());

    const result = await uc.execute({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      birthDate: req.body.birthDate,
      picture: req.body.picture
    });

    res.status(200).send(result);
  } catch (err) {
    res.status(err.code || 400).send({
      message: err.message,
      ...err
    });
  }
};  