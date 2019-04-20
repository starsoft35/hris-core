import { BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { OrganisationUnit } from "./organisationunit";
import { hris_form } from "./form";


@Entity("record", { schema: "public" })
export class RecordValue {

    @Column("integer", {
        nullable: false,
        primary: true,
        name: "id"
    })
    recordvalueid: number;
}