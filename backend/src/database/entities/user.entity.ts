import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Unique } from 'typeorm';
import crypto from 'crypto';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Unique(['email'])
    @Column()
    email: string;

    @Unique(['userName'])
    @Column()
    userName: string;

    @BeforeInsert()
    public hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }

    @Column()
    password: string;
}