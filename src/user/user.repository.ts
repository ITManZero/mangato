import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { BaseRepository } from "../common/repository/base.repository";

@Injectable()
export class UserRepository extends BaseRepository<User> {

  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }

  findById(id: number): Promise<User> {
    return this.repository.findOneBy({ id });
  }

}
