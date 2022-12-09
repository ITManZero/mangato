import { Injectable } from "@nestjs/common";
import { SelectQueryBuilder } from "typeorm";
import { FindOptionsWhere } from "typeorm/find-options/FindOptionsWhere";
import { BaseRepository } from "../repository/base.repository";
import { ExceptionHelper } from "../helpers/exception.helper";

@Injectable()
export abstract class BaseService<Entity> {

  protected constructor(private repository: BaseRepository<Entity>) {
  }

  async getAll(): Promise<Entity[]> {
    return await this.repository.findAll();
  }

  async getAllBy(findOptionsWhere: FindOptionsWhere<Entity>): Promise<Entity[]> {
    return await this.repository.findAllBy(findOptionsWhere);
  }

  async getById(id: number): Promise<Entity> {
    return await this.repository.findById(id);
  }

  async create<Data>(dto: Data, entity: Entity): Promise<Entity> {
    let newEntity = null;
    try {
      newEntity = await this.repository.create(dto, entity);
    } catch (exception) {
      ExceptionHelper.handle(exception);
    }
    return newEntity;
  }

  async updateById(dto: any, id: number): Promise<Entity> {
    let entity = null;
    try {
      entity = await this.repository.updateById(dto, id);
    } catch (exception) {
      ExceptionHelper.handle(exception);
    }
    return entity;
  }

  async deleteById(id: number): Promise<Entity> {
    return await this.repository.deleteById(id);
  }

  protected createQueryBuilder(): SelectQueryBuilder<Entity> {
    return this.repository.createQueryBuilder();
  }
}
