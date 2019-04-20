import { Injectable, Inject } from '@nestjs/common';
import {
  Repository,
  FindManyOptions,
  DeleteResult,
  UpdateResult,
} from 'typeorm';

@Injectable()
export class ModelService<T> {
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
  async create(entity: T): Promise<T> {
    return await this.modelRepository.save(entity);
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
