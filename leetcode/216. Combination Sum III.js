/**
 * Created by brains on 2017/5/10.
 */
/**
 * 216. Combination Sum III
 *
 *Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9
 * can be used and each combination should be a unique set of numbers
 * */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
    //思路,先把小于n的数字的所有数字组合找出来，然后判断k个数字组成的组合等于n
var combinationSum3 = function(k, n) {
    var arr=[];
    for(var i=1;i<=n;i++){
        arr.push(i);
    }
   return subSet(arr,k,n);
};

var subSet=function(arr,k,n){
    var result=[];
    var max=1<<(arr.length>9?9:arr.length);
    for(var i=1;i<max;i++){
        var temp=[],
            j=i,
            index=0;
        while(j>0){
            if(j&1){
                temp.push(arr[index]);
            }
            index++;
            j=j>>1;
        }
        result.push(temp);
    }
   // console.log(result);
    for(var i=result.length-1;i>=0;i--){
        if(result[i].length!=k){
            result.splice(i,1);
        }else{
            var sum=0;
            result[i].forEach(function(item){
                sum+=item;
            });
            if(sum!=n){
                result.splice(i,1);
            }
        }
    }
    return result;
}

console.log(combinationSum3(2,18));