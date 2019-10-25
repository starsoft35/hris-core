import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { User } from 'src/modules/system/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity('dashboard', { schema: 'public' })
export class Dashboard extends EntityCoreProps {
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

  // @OneToMany(
  //   () => dashboard_items,
  //   (dashboard_items: dashboard_items) => dashboard_items.dashboard,
  // )
  // dashboardItems: dashboard_items[];

  // @OneToMany(
  //   () => pushanalysis,
  //   (pushanalysis: pushanalysis) => pushanalysis.dashboard,
  // )
  // pushAnalysis: pushanalysis[];

  // @ManyToMany(
  //   () => objecttranslation,
  //   (objecttranslation: objecttranslation) => objecttranslation.dashboards,
  //   { nullable: false },
  // )
  // @JoinTable({ name: 'dashboardtranslations' })
  // objectTranslations: objecttranslation[];

  // @ManyToMany(
  //   () => useraccess,
  //   (useraccess: useraccess) => useraccess.dashboards,
  //   { nullable: false },
  // )
  // @JoinTable({ name: 'dashboarduseraccesses' })
  // userAccess: useraccess[];

  // @ManyToMany(
  //   () => usergroupaccess,
  //   (usergroupaccess: usergroupaccess) => usergroupaccess.dashboards,
  //   { nullable: false },
  // )
  // @JoinTable({ name: 'dashboardusergroupaccesses' })
  // userGroupAccess: usergroupaccess[];
}
