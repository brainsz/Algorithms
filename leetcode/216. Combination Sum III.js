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
    var res=[],
        current=[];
    if(k<1||n<1){
        return res;
    }
    dfs(res,current,0,k,n,1);
    return res;
};
//第二种方法可以采用递归
var dfs=function(res,current,sum,k,n,level){
    if(sum==n&&k==0){
        //因为current会不断的改变，对current的引用也会改变，所以需要使用深复制
        //slice(0)
        res.push(current.slice(0));
    }else if(sum>n||k<0){
        return ;
    }
    for(var i=level;i<=9;i++){
        current.push(i);
        dfs(res,current,sum+i,k-1,n,i+1);
        current.pop();
    }
}

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

console.log(combinationSum3(3,9));