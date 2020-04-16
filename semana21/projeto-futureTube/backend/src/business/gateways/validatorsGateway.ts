export interface ValidatorsGateway {
  validateSignupInput(input: any): void
  validateLoginInput(input: any): void
  validateChangePasswordInput(input: any): void
  validateUpdateVideoInput(input: any): void 
}