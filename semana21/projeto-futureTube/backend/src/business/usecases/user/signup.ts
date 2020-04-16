import { v4 } from "uuid";
import { User } from "../../entities/user";
import { UserGateway } from "../../gateways/userGateway";
import { BcryptGateway } from "../../gateways/bcryptGateway";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { ValidatorsGateway } from "../../gateways/validatorsGateway";
import { ConflictError } from "../../errors/conflictError";


export class SignupUC {
  constructor(
    private db: UserGateway, 
    private jwtAuth: JWTAutenticationGateway, 
    private bcrypt: BcryptGateway,
    private validators: ValidatorsGateway
  ) {}

  public async execute(input: SignupUCInput): Promise<SignupUCOutput | undefined>{
    try{
      const id = v4();

      this.validators.validateSignupInput(input)

      const user = this.db.getUserByEmail(input.email)

      if(user) {
        throw new ConflictError('User already registered')
      }
  
      const hashPassword = await this.bcrypt.generateHash(input.password);

      const newUser = new User(
        id,
        input.name,
        input.email,
        hashPassword,
        new Date(input.birthDate),
        input.picture
      )
  
      await this.db.createUser(newUser);
      
      const token = this.jwtAuth.generateToken(id);
      
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