import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Booking } from "./Booking";
import { Review } from "./Review";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    numRooms: number;

    @Column()
    price: number;

    @Column()
    allowSmoking: boolean;

    @Column()
    maxGuestNum: number;

    @OneToMany(type => Booking, booking => booking.property)
    bookings: Booking[]

    @OneToMany(type => Review, review => review.property)
    reviews: Review[]

}
