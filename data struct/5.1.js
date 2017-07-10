/**
 * Created by brains on 2017/7/7.
 */
/**
 * 将非零元素放到前面
 * **/

var arr=[1,2,0,0,0,3,0,4];
var k=-1;
for(var i=0;i<arr.length;i++){
    if(arr[i]!=0){
        ++k;
        if(k!=i){
            var temp=arr[k];
            arr[k]=arr[i];
            arr[i]=temp
        }
    }
}
console.log(arr);