import { IsDate, IsDateString, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { Gender } from "../../common/constants/gender.enum";

export class UserDto {
  @MinLength(5, {
    message: "fullName is too short"
  })
  @MaxLength(75, {
    message: "fullName is too long"
  })
  @IsString()
  fullName: string;

  @MinLength(10, {
    message: "email is too short"
  })
  @MaxLength(255, {
    message: "email is too long"
  }) @IsNotEmpty()
  @IsString()
  email: string;

  @MinLength(8, {
    message: "password is too short"
  })
  @MaxLength(100, {
    message: "password is too long"
  })
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsEnum(Gender, { message: "please enter valid gender" })
  gender: string;

  @IsNotEmpty()
  @IsDateString({ message: "incorrect date format" })
  dateOfBirth: string;
}




