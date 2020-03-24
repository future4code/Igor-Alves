import { UserGateway } from "../../gateways/userGateway";
import { BcryptPassword } from "../../../utils/bcrypt";
import { JWTAutentication } from "../../../utils/jwtAutentication";


export class LoginUC {
  constructor(private db: UserGateway) {}

  public async execute(input: LoginUCInput): Promise<LoginUCOutput | undefined> {
    try {
      if (!input) {
        return undefined
      }

      if (input.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }

      const user = await this.db.getUserByEmail(input.email);

      if (!user) {
        throw new Error("Email incorreto");
      }

      const bcrypt = new BcryptPassword()

      const isPasswordCorrect = await bcrypt.compareHash(input.password, user.getPassword());

      if (!isPasswordCorrect) {
        throw new Error("Senha incorreta")
      }

      const jwtAuth = new JWTAutentication()

      const token = jwtAuth.generateToken(user.getId());

      return {
        message: "Usuário logado com sucesso",
        token: token
      }
    } catch (err) {
      console.log(err)
      throw new Error("Erro ao fazer login")
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
