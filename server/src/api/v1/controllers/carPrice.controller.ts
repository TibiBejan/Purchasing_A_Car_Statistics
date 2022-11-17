import { NextFunction, Request, Response } from 'express';

export const fetchCarModels = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { genmodel, year, sort_by, order  } = req.query;

        res.status(200).json({
            ...req.query
        })
    }
    catch(err) {

    }
}
