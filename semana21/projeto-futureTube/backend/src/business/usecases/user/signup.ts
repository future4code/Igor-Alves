import { v4 } from "uuid";
import { User } from "../../entities/user";
import { UserGateway } from "../../gateways/userGateway";
import { BcryptGateway } from "../../gateways/bcryptGateway";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { BadRequestError } from "../../errors/badRequestError";


export class SignupUC {
  constructor(private db: UserGateway, private jwtAuth: JWTAutenticationGateway , private bcrypt: BcryptGateway) {}

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

      const newUser = new User();
  
      const token = this.jwtAuth.generateToken(newUser.getId());
     
      await this.db.createUser(newUser);

      return {
        message:"User successfully created",
        token: token
      };
    }catch(err){
      throw {
        code: err.statusCode || 400,
        message: err.message || 'An error occurred during the user creation'
      }
    }
  }
}

export interface SignupUCInput {
  name: string
  email: string
  password: string
  birthDate: string
  picture: string
}

export interface SignupUCOutput {
  message: string
  token: string
}