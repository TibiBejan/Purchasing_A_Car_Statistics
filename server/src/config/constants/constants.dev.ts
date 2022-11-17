export default {
    logs: 'dev',
    mysqlHost: process.env.MYSQL_HOST_DEV,
    mysqlPort: process.env.MYSQL_PORT_DEV ? Number(process.env.MYSQL_PORT_DEV) : undefined,
    mysqlUser: process.env.MYSQL_USER_DEV,
    mysqlPassword: process.env.MYSQL_PWD_DEV,
    mysqlDatabase: process.env.MYSQL_DB_NAME_DEV,
}