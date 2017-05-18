/**
 * Created by brains on 2017/5/18.
 */
//归并排序
//将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，
// 再使子序列段间有序。
// 若将两个有序表合并成一个有序表，称为2-路归并。

function mergeSort(arr){
    var len=arr.length;
    //递归结束条件
    if(len<2){
        return arr;
    }
    //将无序数组划分为两个数组
    var middle=Math.floor(len/2),
        left=arr.slice(0,middle),
        right=arr.slice(middle);
    //递归分别对左右两部分数组进行排序合并
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    var result=[];
    while(left.length>0 && right.length>0){
        if(left[0]<right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    //当左右数组长度不相等,将比较完之后剩下的数组项链接起来即可
    return result.concat(left).concat(right);
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
function mergeSort1(arr){
    var len=arr.length;
    //只有一个元素的时候返回
    if(len<2){
        return arr;
    }

    var middle=Math.floor(len/2),
        left=arr.slice(0,middle),
        right=arr.slice(middle,len);
    return merge(mergeSort1(left),mergeSort1(right));
}
//排序
function merge1(left,right){
    var array=[];
    while(left.length&&right.length){
        if(left[0]<right[0]){
            array.push(left.shift());
        }else{
            array.push(right.shift());
        }
    }
    return arr.concat(left).concat(right);
}