/**
 * Created by brains on 2017/5/7.
 */
//快速排序算法
//快速排序算法是一种不稳定的排序算法
//时间复杂度:最好O(n^2),最好(O(nlog2^n)),平均(O(nlog2^n)),空间复杂度:O(log2^n);
//快速排序的基本思想：通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，
// 则可分别对这两部分记录继续进行排序，以达到整个序列有序。

//第一种快速排序算法
function quickSort1(left,right,arr){
    //判断arr是否是数组
    var i=left,
        j=right,
        temp;
        //如果左边下表小于右边，才进行下面的操作
        if(left<right){
            //保留左边第一个元素，进行后续的对比操作，小于这个元素的放左边，大于这个元素的放右边
            temp=arr[left];
            while(i!=j){
                //从右边往左扫描,找到第一个小于temp的数
                while(i<j&&arr[j]>=temp){
                    j--;
                }
                //把arr[j]给arr[i]
                arr[i]=arr[j];
                while(i<j&&arr[i]<=temp){
                    i++;
                }
                //把arr[i]赋值给arr[j]
                arr[j]=arr[i];
            }
            //全部交换完毕，左边的元素都是小于temp，右边的元素都是大于temp的,最后把temp赋值到i位置处
            arr[i]=temp;
            //继续对左边元素和右边元素递归操作
            quickSort1(left,i-1,arr);
            quickSort1(i+1,right,arr);
        }
        return arr;
}

//第二种快速排序方法
//需要借助辅助空间数组，这种方法不是很推荐
function quickSort2(arr){
    //如果数组只有一个元素，返回，递归
    if(arr.length<2){
        return arr;
    }
    //把长度右移一位,找到中间的下标
    var pivotIndex=arr.length>>1;
    //删除中间的基准数字，并且取出来与后面的比较
    var pivot=arr.splice(pivotIndex,1)[0];
    var left=[],
        right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort2(left).concat([pivot]).concat(quickSort2(right));
}


var arr2=[9,8,7,6,5,4,3,2,1];
console.log(quickSort1(0,arr2.length-1,arr2));
console.log(quickSort2(arr2)==arr2.sort());