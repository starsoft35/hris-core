import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { DashboardItem } from '../../dashboard-item/entities/dashboard-item.entity';
import { Map } from '../../map/entities/map.entity';

@Entity('dashboarditemmap', { schema: 'public' })
export class DashboardItemMap {
  @ManyToOne(
    () => DashboardItem,
    (dashboardItem: DashboardItem) => dashboardItem.dashboardItemMaps,
    { primary: true },
  )
  @JoinColumn({ name: 'dashboarditemid' })
  dashboardItem: DashboardItem;

  @ManyToOne(() => Map, (map: Map) => map.dashboardItemMaps)
  @JoinColumn({ name: 'mapid' })
  map: Map;
}
