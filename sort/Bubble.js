/**
 * Created by brains on 2017/3/7.
 */
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
function bubbleSort2(arr){

    console.time('改进后冒泡排序耗时');
    var i=arr.length-1;  //初始时,最后位置保持不变
    while(i>0){
        var pos=0;//每趟开始时,无记录交换
        for(var j=0;j<i;j++)
            if(arr[j]>arr[j+1]){
                pos=j;//记录交换的位置
                var tmp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tmp;
            }
        i=pos;//为下一趟排序作准备
    }
    console.timeEnd('改进后冒泡排序耗时');
    return arr;
}

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

