import { Request, Response, Router } from 'express';
import carRouter from './car.route';
import priceRouter from './carPrice.route';

const router: Router = Router();

router.get('/status', (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        message: "Server is up and running...",
        timestamp: new Date().toISOString(),
        ip: req.ip,
        hostname: req.hostname,
        url: req.originalUrl
    });
});

router.use('/car', carRouter);
// router.use('/car/price', priceRouter);
  
export default router;