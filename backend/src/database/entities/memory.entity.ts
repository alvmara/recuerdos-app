import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

interface IComment {
    id: string,
    userName: string,
    userPhoto: string,
    comment: string,
    date: string,
}

@Entity()
export class Memory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    ownerName: string;

    @Column({ nullable: false })
    ownerId: string;

    @Column({
        type: 'jsonb',
        array: false,
        default: () => "'[]'",
        nullable: false,
    })
    images: Array<string>;

    @Column({ type: 'timestamptz', nullable: false, default: () => 'CURRENT_TIMESTAMP' })
    date: string;

    @Column({
        type: 'jsonb',
        array: false,
        default: () => "'[]'",
        nullable: false,
    })
    comments: Array<IComment>;
}