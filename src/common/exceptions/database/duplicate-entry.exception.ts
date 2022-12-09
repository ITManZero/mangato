import { QueryFailedError, TypeORMError } from "typeorm";

export class DuplicateEntryException extends TypeORMError {

  constructor(private exception: QueryFailedError) {
    super(exception.driverError.code);
    // this.exception.driverError.code;
    // this.exception.driverError.errno;
  }
}