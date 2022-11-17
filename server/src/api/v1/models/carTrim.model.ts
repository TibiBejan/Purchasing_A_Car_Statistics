import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Car from './car.model';

@Entity({
    name: 'car_trim'
})
class CarTrim {
    @PrimaryGeneratedColumn('uuid')
    car_id!: string

    @Column({
        unique: false,
    })
    Genmodel_ID: string

    @Column()
    Maker!: string

    @Column()
    Genmodel!: string

    @Column()
    Trim!: string

    @Column()
    Year!: number

    @Column()
    Price!: number

    @Column()
    Gas_emission!: number

    @Column()
    Fuel_type!: string

    @Column()
    Engine_size!: number

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

export default CarTrim;