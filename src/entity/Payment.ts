import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    status: string;

    @Column()
    paymentMethod: string;

    @ManyToOne(type => Booking, booking => booking.payments)
    booking: Booking;
}
