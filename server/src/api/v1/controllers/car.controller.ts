import { getAll } from '@api/v1/services/car.service';
import { NextFunction, Request, Response } from 'express';
import { Car } from '../models';


export const getCarsWithTrim = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { include } = req.query;
        let carsResponse: Car[] | {};

        switch(include) {
            case 'trim':
                carsResponse = await getAll(include);
                break;
            default:
                carsResponse = {};
        }

        res.status(200).json({
            success: true,
            payload: {
                cars: carsResponse,
            },
            error: null,
            message: 'Success, cars fetched from the database!'
        });
    }
    catch(err) {
        res.status(500).json({
            success: false,
            payload: null,
            error: err,
            message: 'Failure, received error while fetching cars from the database!'
        });
    }
}