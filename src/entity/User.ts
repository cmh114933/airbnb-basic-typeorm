import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import { Booking } from "./Booking";
import { Community } from "./Community";

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "first_name"})
    firstName: string;

    @Column({name: "last_name"})
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @OneToMany(type => Booking, booking => booking.user)
    bookings: Booking[]

    @ManyToMany(type => Community, community => community.users)
    communities: Community[]
}
