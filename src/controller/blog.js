const getList = (author,keyword) => {
  //先返回假数据（格式是正确的）
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      creatTime: 1546610491112,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      creatTime: 1546610524733,
      author: 'lisi'
    },
  ]
}

module.exports = {
  getList
}