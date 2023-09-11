// 有效数字,isNaN无法判断,00.1的缺陷
export function isExistNum(num) {
  // * {0,};  + {1,}
  let reg=/^-?(([1-9][0-9]*)|([0-9]))(.[0-9]+)?$/  //整数,一位数（0-9）,多位数（第一位 1-9,第二位 0-9）
  if(reg.test(num)){
  return true
  }
  return false
}


//所以ISNAN有何用，兼容的太宽了，海王吧
function isNaNBook(){
  // 我私自的认为啊
  // isNaN,是先Number(num),

  NaN!==NaN;
  isNaN(NaN) ==true;
  isNaN(undefined) ==true;
  isNaN({}) ==true;
  isNaN([1,2]) ==true;
  isNaN(['a']) ==true;
  
  // true,false,null,'',[];对于Number()都能转换成数字
  // 所以都不是NaN
  isNaN([]) ==false; //空数组不是NaN，注意
  isNaN([1]) ==false; //数组只有一项，且这个符合Number()
  
  isNaN('000.1') ==false;
  isNaN('') ==false;
  isNaN('     ') ==false;
  isNaN(null) ==false;
  isNaN(true) ==false;
  isNaN(false) ==false;

}

function toStringBook(){
  // 12.toString()会报错
  // 原因是数字后面的”.”操作符是的意义是不确定。
  // 因为它既可能是一个浮点数的标志，
  // 又可能是取一个对象的属性的运算符。
  // 但是JavaScript的解释器把他当做了浮点数的标志，所以上面的代码和下面的是等价的
  12..toString()
}