import { QueryFailedError, TypeORMError } from "typeorm";
import { TypeormError } from "../constants/typeorm-error.enum";
import { DuplicateEntryException } from "../exceptions/database/duplicate-entry.exception";

export class ExceptionHelper {

  public static handle(exception: TypeORMError) {
    if (exception instanceof QueryFailedError) {
      let errorNumber = exception.driverError.errno;
      let errorName = exception.driverError.code;
      if (errorNumber == TypeormError.ER_DUP_ENTRY) {
        throw  new DuplicateEntryException(exception);
      } else {
        console.log(errorName);
        console.log(errorNumber);
      }
    }
  }

}