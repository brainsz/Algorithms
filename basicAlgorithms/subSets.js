/**
 * Created by brains on 2017/5/10.
 */
/**
 * 求一个数组所有的子数组集合
 *
 * */

//第一种方法:位运算  数组中的n个数可以用n个二进制位表示，
// 当某一位为1表示选择对应的数，为0表示不选择对应的数

var subSets=function(arr){
    var max=1<<arr.length;
    var result=[];
    for(var i=0;i<max;i++){
        var index=0,
            j=i,
            temp=[];
        while(j>0){
            //判断最后一位是否是1，是的话把对应的数字加入到当前组合
            if(j&1){
                temp.push(arr[index]);
            }
            //数组下标加1
            index++;
            //判断完一位之后要右移
            j=j>>1;
        }
        result.push(temp);
    }
    return result;
}
console.log(subSets([1,2,3,4]));
