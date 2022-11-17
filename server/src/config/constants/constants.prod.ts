export default {
    logs: 'production',
    mysqlHost: process.env.MYSQL_HOST_PRODUCTION,
    mysqlPort: process.env.MYSQL_PORT_PRODUCTION ? Number(process.env.MYSQL_PORT_PRODUCTION) : undefined,
    mysqlUser: process.env.MYSQL_USER_PRODUCTION,
    mysqlPassword: process.env.MYSQL_PWD_PRODUCTION,
    mysqlDatabase: process.env.MYSQL_DB_NAME_PRODUCTION,
}