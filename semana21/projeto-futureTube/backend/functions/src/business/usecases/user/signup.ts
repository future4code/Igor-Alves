import { v4 } from "uuid";
import { User } from "../../entities/user";
import { UserGateway } from "../../gateways/userGateway";
import { BcryptPasswordGateway } from "../../gateways/bcryptPassword";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { BadRequestError } from "../../errors/BadRequestError";


export class SignupUC {
  constructor(private db: UserGateway, private jwtAuth: JWTAutenticationGateway , private bcrypt: BcryptPasswordGateway) {}

  public async execute(input: SignupUCInput): Promise<SignupUCOutput | undefined>{
    try{
      const id = v4();

      if(!input){
        return undefined
      }

      if (input.email.indexOf("@") === -1) {
        throw new BadRequestError("Invalid email request");
      }
  
      const hashPassword = await this.bcrypt.generateHash(input.password);

      const newUser = new User(id, input.name, input.email, hashPassword);
  
      const token = this.jwtAuth.generateToken(newUser.getId());
     
      await this.db.createUser(newUser);

      return {
        message:"User successfully created",
        token: token
      };
    }catch(err){
      if(err.errorCode) {
        throw err
      }
      throw new Error('An error occurred during sign up')
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