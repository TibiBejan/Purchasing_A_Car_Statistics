import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Car from './car.model';

@Entity({
    name: 'car_feature'
})
class CarFeature {
    @PrimaryGeneratedColumn('uuid')
    car_id!: string

    @Column()
    Maker!: string

    @Column()
    Genmodel!: string

    @Column()
    Genmodel_ID: string

    @Column()
    Adv_ID: string

    @Column()
    Adv_year!: number

    @Column()
    Adv_month!: number

    @Column()
    Color!: string

    @Column()
    Reg_year!: number

    @Column()
    Bodytype!: string

    @Column({
        nullable: true
    })
    Runned_Miles!: number

    @Column({
        nullable: true
    })
    Engine_size!: string

    @Column({
        nullable: true
    })
    Gearbox!: string

    @Column()
    Fuel_type!: string

    @Column({
        nullable: true
    })
    Price!: number

    @Column({
        nullable: true
    })
    Engine_power!: string

    @Column({
        nullable: true
    })
    Annual_Tax!: string

    @Column({
        nullable: true
    })
    Wheelbase!: number
    
    @Column({
        nullable: true
    })
    Height!: number

    @Column({
        nullable: true
    })
    Width!: number

    @Column({
        nullable: true
    })
    Length!: number

    @Column({
        nullable: true
    })
    Average_mpg!: string

    @Column({
        nullable: true
    })
    Top_speed!: string
    
    @Column()
    Seat_num!: number
    
    @Column()
    Door_num!: number

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

export default CarFeature;