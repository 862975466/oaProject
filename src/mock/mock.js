import Mock from 'mockjs'
function getRImg(size) {
  return Mock.Random.image(size,Mock.mock('@hex'));
}
function loginByUsername(){
  var loginObjK = {};
  let key = Mock.mock('@guid');
  loginObjK.accesstoken = key;
  loginObjK.code = 200;
  loginObjK.userId = Date.parse(new Date());
  loginObjK.userName = Mock.mock('@cname');
  return loginObjK;
}
//登录
Mock.mock(/login/, loginByUsername);
//公告
Mock.mock(/getNoticelist/,{
  "list|7":[
    {
      'title':'@ctitle(15,45)',
      'id':'@string("number", 5)',
      'ctime':Mock.mock('@date'),
    }
  ]
});
//待办工作
Mock.mock(/getStayWorklist/,{
  "list|7":[
    {
      'title':'@ctitle(15,45)',
      'id':'@string("number", 5)',
      'ctime':Mock.mock('@date'),
    }
  ]
});
//在办工作
Mock.mock(/getNowWorklist/,{
  "list|7":[
    {
      'title':'@ctitle(15,45)',
      'id':'@string("number", 5)',
      'ctime':Mock.mock('@date'),
    }
  ]
});

Mock.mock(/getChanpinlist/,{
  "list|8":[
    {
      'chpClass':'@ctitle(6,10)',
      'title':'@ctitle(10,15)',
      'jsh':'@ctitle(40,60)',
      'img':getRImg('200px*160px'),
      'id':'@string("number", 5)'
    }
  ]
})
Mock.mock(/getAboutUs/,{
  "list":{
    'content':'@ctitle(100)',
    'img':getRImg('500px*300px'),
    'id':'@string("number", 5)',
    'title':'@ctitle(10,15)'
  }
})
