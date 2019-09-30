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
import { IntergrationTiisDataConnection } from './hris_intergration_tiis_data_connection';
import { Field } from './hris_field';

@Entity('ntergrationtiisemployeefieldrelation', { schema: 'public' })
@Index('idx_a802e39c443707b0', ['field'])
export class IntergrationTiisEmployeeFieldrelation {
  @OneToOne(
    () => IntergrationTiisDataConnection,
    (
      IntergrationTiisDataConnection: IntergrationTiisDataConnection,
    ) =>
      IntergrationTiisDataConnection.hrisIntergrationTiisEmployeeFieldrelation,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'tiisdataconnectionid' })
  tiisDataConnection: IntergrationTiisDataConnection | null;

  @ManyToOne(
    () => Field,
    (Field: Field) =>
      Field.hrisIntergrationTiisEmployeeFieldrelations,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'columnname',
  })
  columnname: string | null;
}
