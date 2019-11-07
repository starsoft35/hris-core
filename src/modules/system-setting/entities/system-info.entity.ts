import { Column, Entity } from 'typeorm';
import { EntityCoreProps } from 'src/core/entities/entity-core-props';

@Entity('systeminfo', { schema: 'public' })
export class SystemInfo extends EntityCoreProps {
  static plural = 'systeminfos';
  @Column('bytea', {
    nullable: true,
    name: 'value',
  })
  value: Buffer | null;
}
