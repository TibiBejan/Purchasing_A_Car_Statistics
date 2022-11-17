import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Car from './car.model';

@Entity({
    name: 'car_sale'
})
class CarSale {
    @PrimaryGeneratedColumn('uuid')
    car_sale_id!: string

    @Column()
    Maker!: string

    @Column()
    Genmodel!: string

    @Column()
    Genmodel_ID: string

    @Column()
    2020!: number

    @Column()
    2019!: number

    @Column()
    2018!: number

    @Column()
    2017!: number

    @Column()
    2016!: number

    @Column()
    2015!: number

    @Column()
    2014!: number

    @Column()
    2013!: number

    @Column()
    2012!: number

    @Column()
    2011!: number

    @Column()
    2010!: number

    @Column()
    2009!: number

    @Column()
    2008!: number

    @Column()
    2007!: number

    @Column()
    2006!: number

    @Column()
    2005!: number

    @Column()
    2004!: number

    @Column()
    2003!: number

    @Column()
    2002!: number

    @Column()
    2001!: number

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

export default CarSale;