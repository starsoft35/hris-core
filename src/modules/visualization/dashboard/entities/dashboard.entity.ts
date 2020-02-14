import { EntityCoreProps } from '../../../../core/entities/entity-core-props';
import { User } from '../../../system/user/entities/user.entity';
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

  @Column('text', {
    nullable: true,
    name: 'href',
  })
  href: string | null;

  @Column('character varying', {
    nullable: false,
    name: 'displayName',
  })
  displayName: string | null;

  @ManyToOne(
    () => User,
    (user: User) => user.dashboards,
    {},
  )
  @JoinColumn({ name: 'userid' })
  user: User | null;

  @Column('boolean', {
    nullable: true,
    name: 'externalaccess',
  })
  externalaccess: boolean | null;

  @Column('character varying', {
    nullable: true,
    length: 8,
    name: 'publicaccess',
  })
  publicaccess: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'favorite',
  })
  favorite: boolean | null;

  @OneToMany(
    () => DashboardItem,
    (dashboardItem: DashboardItem) => dashboardItem.dashboard,
  )
  dashboardItems: DashboardItem[];

  @Column('integer', {
    nullable: true,
    name: 'itemCount',
  })
  itemCount: number | null;

  // @OneToMany(
  //   () => pushanalysis,
  //   (pushanalysis: pushanalysis) => pushanalysis.dashboard,
  // )
  // pushAnalysis: pushanalysis[];
}
