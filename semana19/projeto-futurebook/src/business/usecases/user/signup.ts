import { v4 } from "uuid";
import { User } from "../../entities/user";
import { UserGateway } from "../../gateways/userGateway";
import { JWTAutentication } from "../../../utils/jwtAutentication";
import { BcryptPassword } from "../../../utils/bcrypt";


export class SignupUC {
  constructor(private db: UserGateway) {}

  public async execute(input: SignupUCInput): Promise<SignupUCOutput | undefined>{
    try{
      const id = v4();

      if(!input){
        return undefined
      }

      if (input.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }

      const bcrypt = new BcryptPassword();
  
      const hashPassword = await bcrypt.generateHash(input.password);

      const newUser = new User(id, input.name, input.email, hashPassword);
  
      const JWTAuth = new JWTAutentication();

      const token = JWTAuth.generateToken(newUser.getId());
     
      await this.db.createUser(newUser);

      return {
        message:"Usuário criado com sucesso",
        token: token
      };
    }catch(err){
      console.log(err)
      throw new Error("Erro ao cadastrar usuário")
    }
  }
}

export interface SignupUCInput {
  name: string;
  email: string;
  password: string;
}

export interface SignupUCOutput {
  message: string
  token: string
}