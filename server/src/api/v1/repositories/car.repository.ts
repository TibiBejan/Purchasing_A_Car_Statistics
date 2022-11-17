import { Car } from '@api/v1/models';
import { AppDataSource } from "@config/database";
import { TypeORMError } from 'typeorm';

export const getCarsWithTrim = async (relationWith: string): Promise<Car[] | TypeORMError> => {
    let queryResult;

    switch(relationWith) {
        case 'trim':
            queryResult = await AppDataSource.createQueryBuilder()
                        .select("car")
                        .from(Car, "car")
                        .innerJoinAndSelect('car.carTrimConnection', 'carTrimConnection')
                        .select(["car.Automaker", "car.Genmodel", "carTrimConnection.Trim", "carTrimConnection.Year", "carTrimConnection.Price", "carTrimConnection.Fuel_Type", "carTrimConnection.Engine_size"])
                        .orderBy('car.Automaker', 'ASC')
                        .getMany()
                        .catch(err => {
                            return err.driverError;
                        });
            break;
        case '':
            queryResult = await AppDataSource.createQueryBuilder()
                        .select("car")
                        .from(Car, "car")
                        .getMany()
                        .catch(err => {
                            return err.driverError;
                        });
            break;     
        default:
            queryResult = await AppDataSource.createQueryBuilder()
                        .select("car")
                        .from(Car, "car")
                        .getMany()
                        .catch(err => {
                            return err.driverError;
                        });
            break;              
    }
    return queryResult;
}