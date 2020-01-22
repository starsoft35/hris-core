import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/core/services/base.service';
import { Repository } from 'typeorm';
import { Chart } from '../entities/chart.entity';

@Injectable()
export class ChartService extends BaseService<Chart> {
  constructor(
    @InjectRepository(Chart)
    chartRepository: Repository<Chart>,
  ) {
    super(chartRepository, Chart);
  }

  async findOneByUid(uid: string): Promise<any> {
    return {"lastUpdated":"2019-02-09T20:13:45.425","id":"gOtLTyVug5W","created":"2017-07-29T21:18:43.937","name":"LLIN Accountability Report-IVD","publicAccess":"r-------","type":"LINE","subscribed":false,"cumulativeValues":false,"sortOrder":0,"favorite":false,"topLimit":0,"displayName":"LLIN Accountability Report-IVD","percentStackedValues":false,"noSpaceBetweenColumns":false,"hideTitle":false,"series":"dx","showData":true,"parentGraphMap":{},"regressionType":"NONE","completedOnly":false,"hideEmptyRowItems":"NONE","aggregationType":"DEFAULT","hideSubtitle":false,"title":"LLIN Accountability Graph-IVD","hideLegend":false,"category":"pe","access":{"read":true,"update":true,"externalize":true,"delete":true,"write":true,"manage":true},"lastUpdatedBy":{"id":"I89T5MJIt27"},"dataElementGroupSetDimensions":[],"attributeDimensions":[],"translations":[],"interpretations":[],"userGroupAccesses":[],"columns":[{"dimension":"dx","items":[{"id":"Kl9MzjQI3ms","dimensionItem":"Kl9MzjQI3ms","displayName":"Retirement","dimensionItemType":"INDICATOR"},{"id":"wo7ITisRXeE","dimensionItem":"wo7ITisRXeE","displayName":"Employment","dimensionItemType":"INDICATOR"},{"id":"yKypqIROIO9","dimensionItem":"yKypqIROIO9","displayName":"Age Distribution","dimensionItemType":"INDICATOR"}]}],"dataElementDimensions":[],"categoryDimensions":[],"programIndicatorDimensions":[],"attributeValues":[],"userAccesses":[],"dataDimensionItems":[{"dataDimensionItemType":"INDICATOR","indicator":{"id":"Kl9MzjQI3ms"}},{"dataDimensionItemType":"INDICATOR","indicator":{"id":"wo7ITisRXeE"}},{"dataDimensionItemType":"INDICATOR","dataElement":{"id":"yKypqIROIO9"}}],"categoryOptionGroupSetDimensions":[],"organisationUnitGroupSetDimensions":[],"filters":[{"dimension":"ou","items":[{"id":"USER_ORGUNIT","dimensionItem":"USER_ORGUNIT","displayName":"USER_ORGUNIT"}]}],"rows":[{"dimension":"pe","items":[{"id":"LAST_12_MONTHS","dimensionItem":"LAST_12_MONTHS","displayName":"LAST_12_MONTHS","dimensionItemType":"PERIOD"}]}]};
  }
}
