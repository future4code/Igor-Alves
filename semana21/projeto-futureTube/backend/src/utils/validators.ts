import { ValidatorsGateway } from "../business/gateways/validatorsGateway";
import { BadRequestError } from "../business/errors/badRequestError";
import { UnauthorizedError } from "../business/errors/unauthorizedError";


export class Validators implements ValidatorsGateway {
  private isEmpty(input: string): boolean {
    return input !== undefined && input !== null && input !== ''
  }

  public validateSignupInput(input: any): void {
    if(
      !this.isEmpty(input.name) ||
      !this.isEmpty(input.email) ||
      !this.isEmpty(input.password) ||
      !this.isEmpty(input.birthDate) ||
      !this.isEmpty(input.picture)
    ) {
      throw new BadRequestError('Missing Input')
    } else if(input.email.indexOf("@") === -1) {
      throw new BadRequestError("Invalid email request")
    }
  }

  public validateLoginInput(input: any): void {
    if(
      !this.isEmpty(input.email) ||
      !this.isEmpty(input.password)
    ) {
      throw new BadRequestError('Missing Input')
    } else if(input.email.indexOf("@") === -1) {
      throw new BadRequestError("Invalid email request")
    }
  }

  public validateChangePasswordInput(input: any): void {
    if(
      !this.isEmpty(input.oldPassword) ||
      !this.isEmpty(input.newPassword)
    ) {
      throw new BadRequestError('Missing Input')
    } else if(!this.isEmpty(input.token)) {
      throw new UnauthorizedError("Unauthorized")
    }
  }

  public validateUpdateVideoInput(input: any): void {
    if(
      !this.isEmpty(input.url) ||
      !this.isEmpty(input.thumbnail) ||
      !this.isEmpty(input.title) ||
      !this.isEmpty(input.description)
    ) {
      throw new BadRequestError('Missing Input')
    } else if(!this.isEmpty(input.token)) {
      throw new UnauthorizedError("Unauthorized")
    }
  }
} 
