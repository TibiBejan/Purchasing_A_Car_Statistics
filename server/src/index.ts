/*
* =================== Config Imports ===================
*/
import environmentConstants from '@config/constants';
import app from '@config/express.config';
/*
* ==================== API Imports =====================
*/
// import { logger } from '@api/v1/helpers';

/*
* ==================== Server Init =====================
*/
const port = environmentConstants.port || 3005;

const server = app.listen(port, (): void => {
    // logger.info(`Server is running on port ${environmentConstants.port || 8002}`);
    console.info(`Server is running on port ${environmentConstants.port || 8002}`);

});

/*
* =========== Catch all uncaught exceptions ============
*/
process.on('uncaughtException', (err: Error) => {
    // logger.warn('Uncaught Exception, shutting down the server...');
    console.warn("Uncaught Exception, shutting down the server...");
    console.error(err);
    process.exit(1);
});

/*
* =========== Catch all unhandled rejections ===========
*/
process.on('unhandledRejection', (err: Error) => {
    console.warn('Unhandled Rejection, shutting down the server...');
    console.error(err);
    server.close(() => process.exit(1));
});