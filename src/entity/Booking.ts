import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { User } from "./User";
import { Property } from "./Property";
import { Payment } from "./Payment";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("date")
    checkInDate;

    @Column("date")
    checkOutDate;

    @Column()
    totalPrice: number;

    @Column()
    remarks: string;

    @Column()
    numGuest: number;

    @ManyToOne(type=> User, user => user.bookings)
    @JoinColumn({name: "user_id"})
    user: User;
    
    @ManyToOne(type=> Property, property => property.bookings)
    @JoinColumn({name: "property_id"})
    property: Property;

    @OneToMany(type => Payment, payment => payment.booking)
    payments: Payment[];

}
