/**
 * Created by brains on 2017/7/9.
 */
/*方法说明：堆排序
 @param  array 待排序数组*/
function heapSort(array){
    console.time('堆排序耗时');
    if(Object.prototype.toString.call(array).slice(8,-1)==='Array'){
        //建堆
        var heapSize=array.length,temp;
        for(var i=Math.floor(heapSize/2)-1;i>=0;i--){
            heapify(array,i,heapSize);
        }
        //堆排序
        for(var j=heapSize-1;j>=1;j--){
            temp=array[0];
            array[0]=array[j];
            array[j]=temp;
            heapify(array,0,j);
        }
        console.timeEnd('堆排序耗时');
        return array;
    }else{
        return'array is not an Array!';
    }
}
/*方法说明：维护堆的性质
 @param  arr 数组
 @param  x   数组下标
 @param  len 堆大小*/
function heapify(arr,x,len){
    if(Object.prototype.toString.call(arr).slice(8,-1)==='Array'&&typeof x==='number'){
        var l=2*x+1,r=2*x+2,largest=x,temp;
        if(l<len&&arr[l]>arr[largest]){
            largest=l;
        }
        if(r<len&&arr[r]>arr[largest]){
            largest=r;
        }
        //调整到当前节点大于左右孩子节点
        if(largest!=x){
            temp=arr[x];
            arr[x]=arr[largest];
            arr[largest]=temp;
            //如果还有孩子节点
            heapify(arr,largest,len);
        }
    }else{
        return'arr is not an Array or x is not a number!';
    }
}
var arr=[3, 1, 5, 7, 2, 4, 9, 6,10];
console.log(heapSort(arr));