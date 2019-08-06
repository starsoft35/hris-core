import { Body, Get, Post, Put, Param, Delete, Query, UseGuards, Controller } from '@nestjs/common';
import { SessionGuard } from 'src/modules/user/guards/session.guard';
import { MetadataService } from '../services/metadata.service';

@Controller('api/metadata')
export class MetadataController {
  constructor(private readonly metadataService: MetadataService) {}
  @Get()
  @UseGuards(SessionGuard)
  async findAll(@Query() query): Promise<Object> {
    return this.metadataService.getAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Object> {
    return {}
  }

}
