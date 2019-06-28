import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { User } from "./User";
import { Property } from "./Property";
import { Payment } from "./Payment";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "date", name: "check_in_date"})
    checkInDate;

    @Column({type: "date", name: "check_out_date"})
    checkOutDate;

    @Column({ name: "total_price"})
    totalPrice: number;

    @Column()
    remarks: string;

    @Column({name:"num_guest"})
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
