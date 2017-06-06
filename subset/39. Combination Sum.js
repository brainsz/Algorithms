/**
 * Created by brains on 2017/6/4.
 */
/**
 * 39. Combination Sum
 *Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

 The same repeated number may be chosen from C unlimited number of times.
 *
 * */

//给定一个数组和一个目标数字，找出数组中的和等于这个数字的集合

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var temp=[],
        res=[];
    if(candidates==null||candidates.length==0){
        return res;
    }
    candidates.sort(function(a,b){
        return a-b;
    });
    sum(candidates,temp,target,0,res);
    return res;
};
function sum(candidates,temp,remain,start,res){
    if(remain<0){
        return ;
    }else if(remain==0){
        res.push(temp.slice(0));
    }else{
        for(var i=start;i<candidates.length;i++){
            temp.push(candidates[i]);
            sum(candidates,temp,remain-candidates[i],i,res);
            temp.pop();
        }
    }
}
console.log(combinationSum([1,2,3,5,6,7],5));