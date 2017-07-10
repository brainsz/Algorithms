/**
 * Created by brains on 2017/7/7.
 */
/**
 * 所有奇数移动到偶数前面
 * **/

function odd_even(arr){
    var i=0,
        j=arr.length-1,
        temp;
    while(i<j){
        while(i<j&&arr[j]%2==0){
            j--;
        }
        while(i<j&&arr[i]%2==1){
            i++;
        }
        if(i<j){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    return arr;
}
console.log(odd_even([1,2,3,4,5,6,7,8]));
