import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import { Booking } from "./Booking";
import { Review } from "./Review";
import { Tag } from "./Tag";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column({name: "num_rooms"})
    numRooms: number;

    @Column()
    price: number;

    @Column({name: "allow_smoking"})
    allowSmoking: boolean;

    @Column({name: "max_guest_num"})
    maxGuestNum: number;

    @OneToMany(type => Booking, booking => booking.property)
    bookings: Booking[]

    @OneToMany(type => Review, review => review.property)
    reviews: Review[]

    @ManyToMany(type => Tag, tag => tag.properties)
    tags: Tag[]

}
