import { v4 } from "uuid";
import { User } from "../../entities/user";
import { UserGateway } from "../../gateways/userGateway";
import { BcryptPasswordGateway } from "../../gateways/bcryptPassword";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";


export class SignupUC {
  constructor(private db: UserGateway, private jwtAuth: JWTAutenticationGateway , private bcrypt: BcryptPasswordGateway) {}

  public async execute(input: SignupUCInput): Promise<SignupUCOutput | undefined>{
    try{
      const id = v4();

      if(!input){
        return undefined
      }

      if (input.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const hashPassword = await this.bcrypt.generateHash(input.password);

      const newUser = new User(id, input.name, input.email, hashPassword);
  
      const token = this.jwtAuth.generateToken(newUser.getId());
     
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