 const {getList,getDetail,newBlog,updateBlog,delBlog} = require('../controller/blog.js')
 const {SuccessModel,ErrorModel} = require('../model/resModel')
 
 const handleBlogRouter = (req,res) => {
  const id = req.query.id || ''

   //获取博客列表
   if (req.method === 'GET' && req.path === '/api/blog/list') {
     const author = req.query.author || ''
     const keyword = req.query.keyword || ''
    //  const listData = getList(author,keyword)
    //  return new SuccessModel(listData)
     const result = getList(author, keyword)
     return result.then(listData => {
        return new SuccessModel(listData)
     })
   }

   //获取博客详情
   if (req.method === 'GET' && req.path === '/api/blog/detail') {
     const result = getDetail(id)
     return result.then(data => {
      return new SuccessModel(data)
     })
    // const detailData = getDetail(id)
    // return new SuccessModel(detailData)
  }

  //新建一篇博客
  if (req.method === 'POST' && req.path === '/api/blog/new') {

    const author = 'zhangsan' //假数据，以后删除
    req.body.author = author
    const result = newBlog(req.body)
    return result.then(data => {
      return new SuccessModel(data)
    })
  }

  //更新一篇博客
  if (req.method === 'POST' && req.path === '/api/blog/update') {
    const result = updateBlog(id,req.body)
    return result.then(val =>{
      if (val) {
        return new SuccessModel()
      }else {
        return new ErrorModel("更新博客失败")
      }
    })
    
  }

  //删除一篇博客
  if (req.method === 'POST' && req.path === '/api/blog/del') {
    const author = 'zhangsan' //假数据，以后删除
    const result = delBlog(id,author)
    return result.then(val => {
      if (val) {
        return new SuccessModel()
      }else {
        return new ErrorModel("删除博客失败")
      }
    })
    
  }
 }

 module.exports = handleBlogRouter