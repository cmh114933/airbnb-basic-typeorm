import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable} from "typeorm";
import { User } from "./User";

@Entity()
export class Community {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "label"})
    label:String 

    @ManyToMany(type => User, user => user.communities)
    @JoinTable({
        name: 'communities_users',
        joinColumns: [
            { name: 'community_id' }
        ],
        inverseJoinColumns: [
            { name: 'user_id' }
        ]
    })
    users: User[]
}