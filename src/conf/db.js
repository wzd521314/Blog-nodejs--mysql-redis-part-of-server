const env = process.env.NODE_ENV //环境变量

//配置
let MYSQL_CONF

if (env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'wzd15727657758',
    database: 'myblog'
  }

}
if (env === 'production') {
  MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'wzd15727657758',
    database: 'myblog'
  }
}

module.exports = {
  MYSQL_CONF
}