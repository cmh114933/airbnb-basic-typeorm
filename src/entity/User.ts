import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Booking } from "./Booking";

@Entity()
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

}
