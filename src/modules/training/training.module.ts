import { Module } from '@nestjs/common';
import { TrainingCurriculumController } from './controllers/training-curriculum.controller';
import { TrainingMethodController } from './controllers/training-method.controller';
import { TrainingSectionController } from './controllers/training-section.controller';
import { TrainingSessionController } from './controllers/training-session.controller';
import { TrainingSponsorController } from './controllers/training-sponsor.controller';
import { TrainingTrainersController } from './controllers/training-trainers.controller';
import { TrainingUnitController } from './controllers/training-unit.controller';
import { TrainingVenueController } from './controllers/training-venue.controller';
import { TrainingCurriculumService } from './services/training-curriculum.service';
import { TrainingMethodService } from './services/training-method.service';
import { TrainingSectionService } from './services/training-section.service';
import { TrainingSessionService } from './services/training-session.service';
import { TrainingSponsorService } from './services/training-sponsor.service';
import { TrainingTrainersService } from './services/training-trainers.service';
import { TrainingUnitService } from './services/training-unit.service';
import { TrainingVenueService } from './services/training-venue.service';

@Module({
  controllers: [
    TrainingCurriculumController,
    TrainingMethodController,
    TrainingSectionController,
    TrainingSessionController,
    TrainingSponsorController,
    TrainingTrainersController,
    TrainingUnitController,
    TrainingVenueController,
  ],
  providers: [
    TrainingCurriculumService,
    TrainingMethodService,
    TrainingSectionService,
    TrainingSessionService,
    TrainingSponsorService,
    TrainingTrainersService,
    TrainingUnitService,
    TrainingVenueService,
  ],
})
export class TrainingModule {}
