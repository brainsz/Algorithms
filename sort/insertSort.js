/**
 * Created by brains on 2017/7/9.
 */
/**
 * 插入排序
 * **/

function insertSort(arr){
    var i,j,temp;
    for(i=1;i<arr.length;i++){
        temp=arr[i];
        j=i-1;
        while(j>=0&&temp<arr[j]){
            //移动元素
            arr[j+1]=arr[j];
            j--;
        }
        //放到正确的位置
        arr[j+1]=temp;
    }
    return arr;
}
console.log(insertSort([2,1,4]))