/**
 * Created by brains on 2017/3/7.
 */

    //冒泡排序算法是稳定排序算法，因为比较的时候，如果等于是不会被交换的，所以相对位置不变
    //时间复杂度:最坏(O(n^2)),最好(O(n)),平均(O(n^2))，空间复杂度:O(1)
var arr=[4,3,6,2,8,4,7,6];
function BubbleSort(arr){
    var len=arr.length;
    for(var i=0;i<len;i++){
        for(var j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
//改进冒泡排序
//设置一个标志变量pos，用于记录每趟排序中最后一次进行交换的位置
//由于pos之后的记录都已经交换到位，故在下一趟排序中只需要扫描到pos位置即可
function bubbleSort2(arr2){
    var i=arr2.length-1;
    while(i>0){
        var pos=0;
        for(var j=0;j<i;j++){
            if(arr2[j]>arr2[j+1]){
                //如果交换了记录，则记下交换的下标,下次只循环到这个交换了记录的下标
                pos=j;
                var temp=arr2[j];
                arr2[j]=arr2[j+1];
                arr2[j+1]=temp;
            }
        }
        i=pos;
    }
    return arr2;
}
console.log(bubbleSort2(arr));

//第三种
function bubbleSort3(arr3) {
    var low = 0;
    var high= arr.length-1; //设置变量的初始值
    var tmp,j;
    console.time('2.改进后冒泡排序耗时');
    while (low < high) {
        for (j= low; j< high; ++j) //正向冒泡,找到最大者
            if (arr[j]> arr[j+1]) {
                tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        --high;                 //修改high值, 前移一位
        for (j=high; j>low; --j) //反向冒泡,找到最小者
            if (arr[j]<arr[j-1]) {
                tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
            }
        ++low;                  //修改low值,后移一位
    }
    console.timeEnd('2.改进后冒泡排序耗时');
    return arr3;
}

