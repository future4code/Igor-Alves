import { UserGateway } from "../../gateways/userGateway";
import { BcryptGateway } from "../../gateways/bcryptGateway";
import { NotFoundError } from "../../errors/notFoundError";
import { ConflictError } from "../../errors/conflictError";
import { JWTAutentication } from "../../../utils/jwtAutentication";
import { ValidatorsGateway } from "../../gateways/validatorsGateway";


export class ChangePasswordUC {
  constructor(
    private userGateway: UserGateway, 
    private bcrypt: BcryptGateway, 
    private jwtAuth: JWTAutentication,
    private validators: ValidatorsGateway
  ) {}

  public async execute(input: ChangePasswordUCInput): Promise<ChangePasswordUCOutput | undefined> {
    try {
      this.validators.validateChangePasswordInput(input)

      const userId = await this.jwtAuth.verifyToken(input.token)

      const user = await this.userGateway.getUserById(userId);

      if(!user){
        throw new NotFoundError('Unregistered user')
      }

      const verifyPassword = await this.bcrypt.compareHash(input.oldPassword , user.getPassword());

      if(!verifyPassword) {
        throw new ConflictError('Incorrect password')
      }

      const hashPassword = await this.bcrypt.generateHash(input.newPassword);

      await this.userGateway.updatePassword(hashPassword, userId)

      return{
        message:"Password successfully updated"
      }
    }catch(err){
      throw {
        code: err.statusCode || 400,
        message: err.message || 'An error occurred during the change password'
      }
    }
  }
}
  
export interface ChangePasswordUCInput {
  token: string
  oldPassword: string
  newPassword: string
}

export interface ChangePasswordUCOutput {
  message: string
}