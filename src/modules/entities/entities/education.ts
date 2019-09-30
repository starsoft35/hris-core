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

@Entity('education', { schema: 'public' })
export class Education {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;
  
  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: true,
    length: 510,
    name: 'education',
  })
  education: string | null;

  @Column('character varying', {
    nullable: true,
    length: 510,
    name: 'school',
  })
  school: string | null;

  @Column('character varying', {
    nullable: true,
    length: 510,
    name: 'file_number',
  })
  file_number: string | null;
}
