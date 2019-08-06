import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { MetadataController } from './controllers/metadata.contoller';
import { MetadataService } from './services/metadata.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    
  ],
  controllers: [
    MetadataController,
  ],
  providers: [
    MetadataService,
  ],
})
export class MetadataModule {}
