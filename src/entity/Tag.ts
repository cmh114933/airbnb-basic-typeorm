import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "label"})
    label:String 

    @ManyToMany(type => Property, property => property.tags)
    @JoinTable({
        name: 'properties_tags',
        joinColumns: [
            { name: 'tag_id' }
        ],
        inverseJoinColumns: [
            { name: 'property_id' }
        ]
    })
    properties: Tag[]
}