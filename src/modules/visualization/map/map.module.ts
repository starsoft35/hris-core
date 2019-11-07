import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Map } from './entities/map.entity';
import { MapController } from './controllers/map.controller';
import { MapService } from './services/map.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([Map]),
    ],
    controllers: [MapController],
    providers: [MapService],
})
export class MapModule { }
