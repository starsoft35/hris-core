import { Injectable, Inject } from '@nestjs/common';
import {
  Repository,
  FindManyOptions,
  DeleteResult,
  UpdateResult,
  InsertResult,
  BaseEntity
} from 'typeorm';

@Injectable()
export class BaseService<T extends BaseEntity> {
  constructor(private readonly modelRepository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return await this.modelRepository.find();
  }

  async findAndCount(options: FindManyOptions<T>): Promise<[T[], number]> {
    return await this.modelRepository.findAndCount(options);
  }
  async findOneById(id: string): Promise<T> {
    return await this.modelRepository.findOne({ where: { uid: id } });
  }
  // TODO: give descriptive name for this method
  get model() {
    throw Error('Plural Not set');
    return null;
  }
  async create(entity: Object): Promise<T> {
    
    var model = this.model;
    //model = {...model, ...entity};
    Object.keys(entity).forEach((key) => {
      model[key] = entity[key];
    })

    return model.save();
    //return await this.modelRepository.insert(entity);
  }
  async update(id: string, model: any): Promise<UpdateResult> {
    let condition: any = { uid: id };
    return this.modelRepository.update(condition, model);
  }
  async delete(id: string): Promise<DeleteResult> {
    let condition: any = { uid: id };
    return this.modelRepository.delete(condition);
  }
}
