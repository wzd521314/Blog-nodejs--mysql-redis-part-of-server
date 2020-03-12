const queryString = require('querystring')
const handleUserRouter = require('./src/router/user.js')
const handleBlogRouter = require('./src/router/blog.js')




const serverHandle = (req,res) => {
  res.setHeader('content-type', 'application/json')

  //获取path
  const url = req.url
  req.path = url.split('?')[0]

  //解析query
  req.query = queryString.parse(url.split('?')[1])
  
  //处理blog路由
  const blogData = handleBlogRouter(req,res)
  if(blogData) {
    res.end(JSON.stringify(blogData))
    return
  }
  //处理user路由
  const userData = handleUserRouter(req,res)
  if(userData) {
    res.end(JSON.stringify(userData))
    return
  }


  //未命中路由，返回404
  res.writeHead(404, {"content-type": "text/plain"})
  res.write("404 Not Found\n")
  res.end()
}

module.exports = serverHandle

// process.env.NODE_ENV