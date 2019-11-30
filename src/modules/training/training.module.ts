import { Module } from '@nestjs/common';
import { TrainingCurriculumController } from './controllers/training-curriculum.controller';
import { TrainingMethodController } from './controllers/training-method.controller';
import { TrainingSectionController } from './controllers/training-section.controller';
import { TrainingSessionController } from './controllers/training-session.controller';
import { TrainingSponsorController } from './controllers/training-sponsor.controller';
import { TrainingTrainerController } from './controllers/training-trainers.controller';
import { TrainingUnitController } from './controllers/training-unit.controller';
import { TrainingVenueController } from './controllers/training-venue.controller';
import { TrainingCurriculumService } from './services/training-curriculum.service';
import { TrainingMethodService } from './services/training-method.service';
import { TrainingSectionService } from './services/training-section.service';
import { TrainingSessionService } from './services/training-session.service';
import { TrainingSponsorService } from './services/training-sponsor.service';
import { TrainingTrainerService } from './services/training-trainers.service';
import { TrainingUnitService } from './services/training-unit.service';
import { TrainingVenueService } from './services/training-venue.service';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingCurriculum } from './entities/training-curriculum.entity';
import { TrainingMethod } from './entities/training-method.entity';
import { TrainingSession } from './entities/training-session.entity';
import { TrainingSponsor } from './entities/training-sponsor.entity';
import { TrainingTrainer } from './entities/training-trainer.entity';
import { TrainingUnit } from './entities/training-unit.entity';
import { TrainingVenue } from './entities/training-venue.entity';
import { TrainingSection } from './entities/training-section.entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([
      TrainingSection,
      TrainingCurriculum,
      TrainingMethod,
      TrainingSession,
      TrainingSponsor,
      TrainingTrainer,
      TrainingUnit,
      TrainingVenue,
    ]),
  ],
  controllers: [
    TrainingCurriculumController,
    TrainingMethodController,
    TrainingSectionController,
    TrainingSessionController,
    TrainingSponsorController,
    TrainingTrainerController,
    TrainingUnitController,
    TrainingVenueController,
  ],
  providers: [
    TrainingCurriculumService,
    TrainingMethodService,
    TrainingSectionService,
    TrainingSessionService,
    TrainingSponsorService,
    TrainingTrainerService,
    TrainingUnitService,
    TrainingVenueService,
  ],
})
export class TrainingModule {}
