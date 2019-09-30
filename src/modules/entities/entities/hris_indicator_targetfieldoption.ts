import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { IndicatorTarget } from './hris_indicator_target';
import { Fieldoption } from './hris_fieldoption';

@Entity('indicatortargetfieldoption', { schema: 'public' })
@Index('idx_e7321b205f3cdfc2', ['fieldoption'])
@Index('idx_e7321b20158e0b66', ['target'])
export class IndicatorTargetfieldoption {
  @ManyToOne(
    () => IndicatorTarget,
    (IndicatorTarget: IndicatorTarget) =>
      IndicatorTarget.hrisIndicatorTargetfieldoptions,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'targetid' })
  target: IndicatorTarget | null;

  @ManyToOne(
    () => Fieldoption,
    (Fieldoption: Fieldoption) =>
      Fieldoption.hrisIndicatorTargetfieldoptions,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldoptionid' })
  fieldoption: Fieldoption | null;

  @Column('integer', {
    nullable: false,
    name: 'value',
  })
  value: number;

  @Column('integer', {
    nullable: true,
    name: 'max_value',
  })
  max_value: number | null;
}
