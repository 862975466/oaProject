/*******
 * @hrd
 * 数据校验
 * rules:{data:{}}//数据需要校验的格式。key值是__initMethods里面的方法名
 * data:{data:''}//需要校验的数据。json格式
 * type=1是抛出checkDataClass类。否则直接校验
 * rules{data1:{required:'data1不能为空',email:'请输入正确的邮箱'},data2:{required:'data2不能为空',tel:'请输入正确的手机号码'}}
 * data{param:{data1:'数据1',data2:'数据2'}}
 ****/

export function checkDataFun(rules,data,type){
  let checkRe = null;
  if(type==1){
    checkRe = new checkDataClass(rules,data);
  }else {
    const checkData = new checkDataClass(rules,data);
    checkRe = checkData.checkData();
  }
  return checkRe;
};
class checkDataClass{
  constructor(rules,data){
    this.rules = rules;
    this.data = data;
    this.__initMethods();
   // Object.assign(this, data);
  };
  checkData(){
    let reObj = {
      message:'成功',
      state:true
    };
    //校验
    for(let key in this.data){
      const dataKey = this.rules[key];
      for (let rulesKey in dataKey){
        // 判断验证方法是否存在
        if(this.methods[rulesKey]){
          const restate = this.methods[rulesKey](this.data[key]);
          console.log('restate==',restate);
          if(!restate){
            reObj.message = dataKey[rulesKey];
            reObj.state = false;
            break;
          }
        }else {
          reObj.message = '方法未定义';
          reObj.state = false;
          break;
          //alert('方法未定义');;
        }
      }
      //错误不在执行
      if(!reObj.state){
        break;
      }
    };
    return reObj;
  };
  //封装校验方法
  __initMethods() {
    this.methods = {
      //不可为空
      required(value) {
        let empty = false;
        if(value){
          empty = true;
        };
        return empty;
      },
      //邮箱校验
      email(value){
        const ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return ePattern.test(value);
      },
      //手机号码
      tel(value){
        const mPattern = /^1[34578]\d{9}$/;
        return mPattern.test(value);
      },
      //身份证
      cPCheck(value){
        const cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        return cP.test(value);
      },
      //车牌号
      cPattern(value){
        const cPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
        return cPattern.test(value);
      },
    };
  };
};
export default checkDataFun;
