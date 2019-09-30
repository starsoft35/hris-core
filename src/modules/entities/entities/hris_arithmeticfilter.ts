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
import {Friendlyreport} from './hris_friendlyreport';

@Entity('arithmeticfilter', { schema: 'public' })
@Index(
  'arithmetic_filter_idx',
  ['leftexpression', 'operator', 'rightexpression'],
  { unique: true },
)
@Index('uniq_ed3196d55e237e06', ['name'], { unique: true })
@Index('uniq_ed3196d5539b0606', ['uid'], { unique: true })
export class Arithmeticfilter {
    @PrimaryGeneratedColumn({
        name: 'id',
      })
      id: number;
    
      @Column('integer', {
        primary: true,
        name: 'uid',
      })
      uid: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('character varying', {
    nullable: false,
    length: 10,
    name: 'operator',
  })
  operator: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'leftexpression',
  })
  leftexpression: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'rightexpression',
  })
  rightexpression: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'datecreated',
  })
  datecreated: Date;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastupdated',
  })
  lastupdated: Date | null;

  @ManyToMany(
    () => Friendlyreport,
    (Friendlyreport: Friendlyreport) =>
      Friendlyreport.hrisArithmeticfilters,
  )
  hrisFriendlyreports: Friendlyreport[];
}
