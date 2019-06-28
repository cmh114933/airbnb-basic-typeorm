import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    status: string;

    @Column({name: "payment_method"})
    paymentMethod: string;

    @ManyToOne(type => Booking, booking => booking.payments)
    @JoinColumn({name: "booking_id"})
    booking: Booking;
}
