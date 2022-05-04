const bcrypt = require('bcrypt');

import configuration from '../../auth/configuration';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, Unique, BeforeUpdate } from 'typeorm';


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
    @BeforeUpdate()
    public hashPassword() {
        const { salt } = configuration.crypto;

        // Hashing user's salt and password with 1000 iterations, 64 length and sha512 digest
        this.password = bcrypt.hashSync(this.password, salt);
    }

    @Column()
    password: string;
}