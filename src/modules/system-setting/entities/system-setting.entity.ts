import { Column, Entity } from 'typeorm';
import { EntityCoreProps } from 'src/core/entities/entity-core-props';

@Entity('systemsetting', { schema: 'public' })
export class SystemSetting extends EntityCoreProps {
  static plural = 'systemSettings';
  @Column('bytea', {
    nullable: true,
    name: 'value',
  })
  value: Buffer | null;
}
