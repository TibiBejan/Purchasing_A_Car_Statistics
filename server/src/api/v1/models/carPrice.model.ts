import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Car from './car.model';

@Entity({
    name: 'car_price'
})
class CarPrice {
    @PrimaryGeneratedColumn('uuid')
    car_price_id!: string

    @Column()
    Maker!: string

    @Column()
    Genmodel!: string

    @Column()
    Genmodel_ID: string

    @Column()
    Year!: number

    @Column()
    Entry_price!: number

    @CreateDateColumn({
        name: 'created_at'
    })
    createdAt!: Date

    @UpdateDateColumn({
        name: 'updated_at'
    })
    updatedAt!: Date

    @DeleteDateColumn({
        name: 'deleted_at'
    })
    deletedAt?: Date

    @ManyToOne(() => Car)
    @JoinColumn({ name: 'Genmodel_ID' })
    car: Car
}

export default CarPrice;