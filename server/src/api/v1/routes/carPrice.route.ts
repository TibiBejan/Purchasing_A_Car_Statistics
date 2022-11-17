import { fetchCarModels } from '@api/v1/controllers/carPrice.controller';
import { Router } from 'express';

const priceRouter: Router = Router();

priceRouter.get('/', fetchCarModels)

export default priceRouter;