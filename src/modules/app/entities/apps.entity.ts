import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { NamedIdentifiableObject } from '../../../core/entities/named-identifiable-object';

@Entity('app', { schema: 'public' })
export class App extends NamedIdentifiableObject {
  static plural = 'apps';

  @PrimaryGeneratedColumn({
    name: 'appid',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 50,
    name: 'version',
  })
  version: string;

  @Column('character varying', {
    nullable: false,
    length: 50,
    name: 'launchpath',
  })
  launchpath: string;

  @Column('character varying', {
    nullable: false,
    length: 50,
    name: 'appicon',
  })
  appicon: string;
}
