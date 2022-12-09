import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, UseFilters, NotFoundException, BadRequestException
} from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { ParseIntPipe } from "@nestjs/common/pipes";
import { User } from "./entities/user.entity";
import { HttpExceptionFilter } from "../common/exception-filters/database.exception-filter";
import { DuplicateEntryException } from "../common/exceptions/database/duplicate-entry.exception";

@UseFilters(new HttpExceptionFilter())
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  async create(@Body() createUserDto: UserDto) {
    try {
      return await this.userService.create(createUserDto, new User());
    } catch (exception) {
      if (exception instanceof DuplicateEntryException)
        throw new BadRequestException(exception.message);
    }
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(":id")
  async getOne(@Param("id", ParseIntPipe) id: number) {
    let user = await this.userService.getById(id);
    if (!user)
      throw new NotFoundException("user not found");
    return user;
  }

  @Patch(":id")
  async update(@Param("id", ParseIntPipe) id: number, @Body() updateUserDto: UserDto) {
    try {
      return await this.userService.updateById(updateUserDto, id);
    } catch (exception) {
      if (exception instanceof DuplicateEntryException)
        throw new BadRequestException(exception.message);
    }
  }

  @Delete(":id")
  async delete(@Param("id", ParseIntPipe) id: number) {
    return await this.userService.deleteById(id);
  }
}
