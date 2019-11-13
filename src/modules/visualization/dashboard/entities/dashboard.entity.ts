import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { User } from '../../../modules/system/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { DashboardItem } from '../../dashboard-item/entities/dashboard-item.entity';

@Entity('dashboard', { schema: 'public' })
export class Dashboard extends EntityCoreProps {
  static plural = 'dashboards';
  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @ManyToOne(() => User, (user: User) => user.dashboards, {})
  @JoinColumn({ name: 'userid' })
  user: User | null;

  @Column('boolean', {
    nullable: true,
    name: 'externalaccess',
  })
  externalAccess: boolean | null;

  @Column('character varying', {
    nullable: true,
    length: 8,
    name: 'publicaccess',
  })
  publicAccess: string | null;

  @Column('jsonb', {
    nullable: true,
    name: 'favorites',
  })
  favorites: object | null;

  @OneToMany(
    () => DashboardItem,
    (dashboardItem: DashboardItem) => dashboardItem.dashboard,
  )
  dashboardItems: DashboardItem[];

  // @OneToMany(
  //   () => pushanalysis,
  //   (pushanalysis: pushanalysis) => pushanalysis.dashboard,
  // )
  // pushAnalysis: pushanalysis[];
}
