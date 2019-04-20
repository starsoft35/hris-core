import { Injectable, Inject } from '@nestjs/common';
import { Repository, FindManyOptions } from 'typeorm';

@Injectable()
export class ModelService<T> {
  constructor(private readonly modelRepository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return await this.modelRepository.find();
  }

  async findAndCount(options: FindManyOptions<T>): Promise<[T[], number]> {
    return await this.modelRepository.findAndCount(options);
  }
  async update(model: T): Promise<T> {
    return this.modelRepository.save(model);
  }
}
