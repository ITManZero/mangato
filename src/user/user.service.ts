import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { UserRepository } from "./user.repository";
import { BaseService } from "../common/services/base.service";

@Injectable()
export class UserService extends BaseService<User> {

  constructor(private userRepository: UserRepository) {
    super(userRepository);
  }

}
