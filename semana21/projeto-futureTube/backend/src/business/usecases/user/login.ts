import { v4 } from "uuid";
import { UserGateway } from "../../gateways/userGateway";
import { BcryptGateway } from "../../gateways/bcryptGateway";
import { JWTAutenticationGateway } from "../../gateways/jwtAutenticationGateway";
import { NotFoundError } from "../../errors/notFoundError";
import { UnauthorizedError } from "../../errors/unauthorizedError";
import { ValidatorsGateway } from "../../gateways/validatorsGateway";


export class LoginUC {
  constructor(
    private db: UserGateway, 
    private jwtAuth: JWTAutenticationGateway, 
    private bcrypt: BcryptGateway,
    private validators: ValidatorsGateway
  ) {}

  public async execute(input: LoginUCInput): Promise<LoginUCOutput | undefined>{
    try{
      const id = v4();

      this.validators.validateLoginInput(input)
      
      const user = await this.db.getUserByEmail(input.email)

      if(!user){
        throw new NotFoundError("Unregistered user")
      }
  
      const checkPassword = await this.bcrypt.compareHash(input.password, user.getPassword())
      
      if(!checkPassword) {
        throw new UnauthorizedError("Invalid email or password")
      }

      const token = this.jwtAuth.generateToken(user.getId());
      
      return {
        message:"User successfully logged in",
        token: token
      };
    }catch(err){
      throw {
        code: err.statusCode || 400,
        message: err.message || 'An error occurred during login'
      }
    }
  }
}

export interface LoginUCInput {
  email: string
  password: string
}

export interface LoginUCOutput {
  message: string
  token: string
}