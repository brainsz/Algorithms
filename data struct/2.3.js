/**
 * Created by brains on 2017/7/7.
 */
/**
 *
 * 判断一个数组中是否有主元素，出现超过一半的数字
 *
 * **/

var arr=[1,2,3,1,2,3,3,4,5,3,3,6,3,3,3],
    c=arr[0],
    count=1;

for(var i=1;i<arr.length;i++){
    if(arr[i]==c){
        count++;
    }else{
        if(count==0){
            c=arr[i];
            count=1
        }else{
            count--;
        }
    }
}
if (count>0){
    for(i=count=0;i<arr.length;i++){
        if(arr[i]==c){
            count++;
        }
    }
}
console.log(count>(arr.length)>>1);