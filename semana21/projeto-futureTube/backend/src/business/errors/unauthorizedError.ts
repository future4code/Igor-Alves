import { BaseError } from "./baseError";

export class UnauthorizedError extends BaseError {
  constructor(message: string) {
    super(401, message);
  }
}