const {login} = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/resModel')
const {set} = require('../db/redis')

const handleUserRouter = (req,res) => {
  //登录
  if (req.method === 'POST' && req.path === '/api/user/login') {
    const {username,password} = req.body
    const result = login(username, password)

    return result.then(data => {
      if(data.username) {
        //设置session
        
        req.session.username = data.username
        req.session.realname = data.realname
        console.log(req.session.username)
        //同步到 redis
        set(req.sessionId, req.session)

        console.log(req.session)

        return new SuccessModel()
      }
      return new ErrorModel("登录失败")
    })

  }

  //登录验证的测试
  // if (req.method === 'GET' && req.path === '/api/user/login-test') {
  //   console.log(req.session)
  //   if (req.session.username) {
  //     return Promise.resolve(
  //       new SuccessModel({
  //         session: req.session
  //       })
  //     )
  //   }
  //   return Promise.resolve(
  //     new ErrorModel('尚未登录')
  //   )
  // }


}

module.exports = handleUserRouter