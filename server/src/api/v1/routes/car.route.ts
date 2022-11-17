import { getCarsWithTrim } from '@api/v1/controllers/car.controller';
import { Router } from 'express';

const carRouter: Router = Router();

carRouter.get('/', getCarsWithTrim)

export default carRouter;