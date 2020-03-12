const {loginCheck} = require('../controller/user')
const {SuccessModel,ErrorModel} = require('../model/resModel')

const handleUserRouter = (req,res) => {
  //登录
  if (req.method === 'POST' && req.path === '/api/user/login') {
    const {username,password} = req.body
    const result = loginCheck(username,password)

    return result.then(data => {
      if(data.username) {
        return new SuccessModel()
      }
      return new ErrorModel("登录失败")
    })

  }
}

module.exports = handleUserRouter