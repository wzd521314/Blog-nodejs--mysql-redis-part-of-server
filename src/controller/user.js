const {exec, escape} = require('../db/mysql')
const { genPassword }  = require('../utils/cryp')
const login = (username,password) => {
  

  //生成加密密码---这里要注意的是在注册时同样得把加密好的密码传入数据库内
  password = genPassword(password)

  //防止SQL注入
  username = escape(username)
  password = escape(password)

  const sql = `select * from users where username=${username} and password=${password}`

  return exec(sql).then(rows => {
    return rows[0] || {}
  })
}

module.exports = {
  login
}