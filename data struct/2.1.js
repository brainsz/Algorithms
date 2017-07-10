/**
 * Created by brains on 2017/7/6.
 *
 * */
/**
 *
 * 数组元素循环左移p个元素
 * **/

function reverse(arr){
    for(var i=0,j=arr.length-1;i<j;i++,j--){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

var arr=[1,2,3,4,5,6,7,8,9];
var left=reverse(arr.slice(0,5));
var right=reverse(arr.slice(5,arr.length));
arr=reverse(left.concat(right))
console.log(arr);