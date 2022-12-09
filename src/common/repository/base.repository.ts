import { Injectable } from "@nestjs/common";
import { Repository, SelectQueryBuilder } from "typeorm";
import { FindOptionsWhere } from "typeorm/find-options/FindOptionsWhere";
import { EntityHelper } from "../helpers/entity.helper";

@Injectable()
export abstract class BaseRepository<Entity> {

  protected constructor(protected repository: Repository<Entity>) {
  }

  async findAll(): Promise<Entity[]> {
    return await this.repository.find();
  }

  async findAllBy(findOptionsWhere: FindOptionsWhere<Entity>): Promise<Entity[]> {
    return await this.repository.findBy(findOptionsWhere);
  }

  abstract findById(id: number): Promise<Entity>;

  async create<Data>(dto: Data, entity: Entity): Promise<Entity> {
    const newEntity: Entity = EntityHelper.submitData(dto, entity);
    await this.repository.save(newEntity);
    return newEntity;
  }

  async updateById<Data>(dto: Data, id: number): Promise<Entity> {
    const entity = await this.findById(id);
    const updatedEntity: Entity = EntityHelper.submitData(dto, entity);
    await this.repository.save(updatedEntity);
    return updatedEntity;
  }

  async deleteById(id: number): Promise<Entity> {
    const entity = await this.findById(id);
    await this.repository.remove(entity);
    return entity;
  }

  createQueryBuilder(): SelectQueryBuilder<Entity> {
    return this.repository.createQueryBuilder(this.repository.metadata.tableName);
  }
}
