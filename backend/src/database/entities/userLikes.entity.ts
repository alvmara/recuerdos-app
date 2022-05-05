import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity()
export class UserLikes {
    @Column()
    @PrimaryColumn({ type: 'uuid' })
    userId: string;

    @Column()
    @PrimaryColumn({ type: 'uuid' })
    memoryId: string;
}