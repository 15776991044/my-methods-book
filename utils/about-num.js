// 数字相关
import {isExist,isExistText} from "@/utils/base"


export function getCompatibilityNum(num){
  let text =isExist(num)?num.toString():''
  //过滤X.
  let dotIndex= text.indexOf('.')
  if( dotIndex> -1&&dotIndex==text.length-1){
    text=text.replace('.','')
  }
  //过滤-
  if(text==='-'){
    text=''
  }
  return text

}

//获取小数有几位
export function decimals(num) {
  num=num.toString()
  //判断数字是否有小数 
  if (num.indexOf('.') == -1) {
    return 0
  }else {
    let x = String(num).indexOf('.') + 1; //小数点的位置
    let y = String(num).length - x; //小数的位数
    //返回小数点后的个数
    return y
  }
  
}