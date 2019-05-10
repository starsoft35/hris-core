import { Injectable } from '@nestjs/common';
import { BaseEntity, DeleteResult, Repository, UpdateResult } from 'typeorm';

import { getWhereConditions } from '../utilities';
import { getRelations, getSelections } from '../utilities/get-fields.utility';

@Injectable()
export class BaseService<T extends BaseEntity> {
  constructor(private readonly modelRepository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return await this.modelRepository.find();
  }

  async findAndCount(fields, filter, size, page): Promise<[T[], number]> {
    const metaData = this.modelRepository.manager.connection.getMetadata(
      this.model,
    );

    return await this.modelRepository.findAndCount({
      select: getSelections(fields, metaData),
      relations: getRelations(fields, metaData),
      where: getWhereConditions(filter),
      take: size,
      skip: page,
    });
  }
  async findOneById(id: string): Promise<T> {
    return await this.modelRepository.findOne({ where: { uid: id } });
  }
  // TODO: give descriptive name for this method
  get model() {
    throw Error('Plural Not set');
    return null;
  }
  saveEntity(data, modelTarget) {
    const model = new modelTarget();
    const metaData = this.modelRepository.manager.connection.getMetadata(
      this.model,
    );
    const savedEntity = model.save();
    Object.keys(data).forEach(key => {
      if (
        metaData.relations
          .map(item => {
            return item.propertyName;
          })
          .indexOf(key) > -1
      ) {
        metaData.relations
          .filter(item => {
            return item.propertyName === key;
          })
          .forEach(item => {
            if (item.relationType === 'one-to-many') {
              data[key].forEach(child => {
                savedEntity[key].push(this.saveEntity(child, item.target));
              });
            }
            // return {
            //   propertyName: item.propertyName,
            //   relationType: item.relationType,
            //   target: item.target,
            // }
          });
      } else {
        model[key] = data[key];
      }
    });
    return savedEntity;
  }
  async create(entity: any): Promise<any> {
    // return this.saveEntity(entity, this.model);
    const model = new this.model();
    // var metaData = this.modelRepository.manager.connection.getMetadata(this.model);
    // var savedEntity = entity;
    // model = {...model, ...entity};
    Object.keys(entity).forEach(key => {
      model[key] = entity[key];
    });

    // return model.save();
    return await this.modelRepository.save(model);
  }
  async update(id: string, model: any): Promise<UpdateResult> {
    const condition: any = { uid: id };
    return this.modelRepository.update(condition, model);
  }
  async delete(id: string): Promise<DeleteResult> {
    const condition: any = { uid: id };
    return this.modelRepository.delete(condition);
  }
}
