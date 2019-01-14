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
Mock.mock(/login/, loginByUsername);
Mock.mock(/address_edit_before9/,{
  'list':[
    {
      "object|1-4": {
        "110000": "北京市",
        "120000": "天津市",
        "130000": "河北省",
        "140000": "山西省"
      }
    }
  ]
})
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
