import {MigrationInterface, QueryRunner} from "typeorm";

export class organizationunit1570005706748 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
            let organizationUnit = await queryRunner.getTable('hris_organisationunit');

        if (organizationUnit){
           
           
           
            
        
        }
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    

}

}