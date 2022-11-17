import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import CarFeature from "./carFeature";
import CarPrice from "./carPrice.model";
import CarSale from "./carSale.model";
import CarTrim from "./carTrim.model";

@Entity({
    name: 'car'
})
class Car {
    @Column()
    Automaker!: string

    @Column()
    Automaker_ID!: string

    @Column()
    Genmodel!: string

    @PrimaryColumn({
        unique: true,
    })
    Genmodel_ID!: string

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

    @OneToMany(() => CarTrim, carTrim => carTrim.car)
    carTrimConnection: CarTrim[]

    @OneToMany(() => CarPrice, carPrice => carPrice.car)
    carPriceConnection: CarPrice[]

    @OneToMany(() => CarSale, carSale => carSale.car)
    carSaleConnection: CarSale[]

    @OneToMany(() => CarFeature, carFeature => carFeature.car)
    carFeatureConnection: CarFeature[]
}

export default Car;