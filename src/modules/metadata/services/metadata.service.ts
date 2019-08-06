import { Injectable } from '@nestjs/common';
import { BaseEntity, DeleteResult, Repository, UpdateResult, FindConditions } from 'typeorm';


@Injectable()
export class MetadataService {
  constructor() {}

  getAll(): Object | PromiseLike<Object> {
    return [];
  }
}
