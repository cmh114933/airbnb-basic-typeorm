import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    remark: string;

    @ManyToOne(type=> Property, property => property.reviews)
    @JoinColumn({name: "property_id"})
    property: Property;

}
