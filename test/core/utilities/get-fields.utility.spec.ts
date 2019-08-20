import { OrganisationUnit } from '../../../src/modules/organisation-unit/entities/organisation-unit.entity';
import { getSelections, getRelations } from '../../../src/core/utilities/get-fields.utility';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('Testing Fields Convertion on API', () => {
    var orgMetaData;
    beforeAll(async () => {
        console.log('Whatasfsdaf');
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                TypeOrmModule.forRoot(),
            ]
        }).compile();
        orgMetaData = OrganisationUnit.getRepository().metadata;
    });

    it('Testing Getting Fields', () => {
        //organisationUnit.con
        var select = getSelections('name,children[name,children]', orgMetaData);
        expect(select.length).toBe(1);
        expect(select[0]).toBe('name');
    });
    it('Testing Getting Relations', () => {
        var select = getRelations('name,children', orgMetaData);
        expect(select.length).toBe(1);
        expect(select[0]).toBe('children');

        // select = getRelations('name,children[name,children]', orgMetaData);
        // expect(select.length).toBe(2);
        // expect(select[0]).toBe('children');
        // expect(select[1]).toBe('children.children');
    });
});
