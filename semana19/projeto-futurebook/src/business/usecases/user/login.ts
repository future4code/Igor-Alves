import { UserGateway } from "../../gateways/userGateway";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { BcryptPasswordGateway } from "../../gateways/bcryptPassword";


export class LoginUC {
  constructor(private db: UserGateway, private jwtAuth: JWTAutenticationGateway, private bcrypt: BcryptPasswordGateway) {}

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

      const isPasswordCorrect = await this.bcrypt.compareHash(input.password, user.getPassword());

      if (!isPasswordCorrect) {
        throw new Error("Senha incorreta")
      }

      const token = this.jwtAuth.generateToken(user.getId());

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
