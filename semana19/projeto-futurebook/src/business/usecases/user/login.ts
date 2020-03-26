import { UserGateway } from "../../gateways/userGateway";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { BcryptPasswordGateway } from "../../gateways/bcryptPassword";
import { BadRequestError } from "../../errors/BadRequestError";
import { NotFoundError } from "../../errors/NotFoundError";
import { UnauthorizedError } from "../../errors/UnauthorizedError";


export class LoginUC {
  constructor(private db: UserGateway, private jwtAuth: JWTAutenticationGateway, private bcrypt: BcryptPasswordGateway) {}

  public async execute(input: LoginUCInput): Promise<LoginUCOutput | undefined> {
    try {
      if (!input) {
        return undefined
      }

      if (input.email.indexOf("@") === -1) {
        throw new BadRequestError("Invalid email request");
      }

      const user = await this.db.getUserByEmail(input.email);

      if (!user) {
        throw new NotFoundError("User is not registered");
      }

      const isPasswordCorrect = await this.bcrypt.compareHash(input.password, user.getPassword());

      if (!isPasswordCorrect) {
        throw new UnauthorizedError("Invalid email or password")
      }

      const token = this.jwtAuth.generateToken(user.getId());

      return {
        message: "User successfully logged in",
        token: token
      }
    } catch (err) {
      if(err.errorCode) {
        throw err
      }
      throw new Error('An error occurred during login')
    }
  }
}

export interface LoginUCInput {
  email: string;
  password: string
}

export interface LoginUCOutput {
  message: string;
  token: string
}
