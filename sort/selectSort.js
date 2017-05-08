/**
 * Created by brains on 2017/5/8.
 */
//选择排序
//它的工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
// 然后，再从剩余未排序元素中继续寻找最小（大）元素，
// 然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕

    //时间复杂度:O(n^2)，空间复杂度:O(n^2)
var arr=[4,5,3,2,7,8,3,1];
function selectionSort(arr){
    var len=arr.length;
    var minIndex,temp;
    for(var i=0;i<len;i++){
        minIndex=i;
        for(var j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                //找到更小的数
                minIndex=j;
            }
        }
        //交换两个数
        temp=arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex]=temp;
    }
    return arr;
}