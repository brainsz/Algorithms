/**
 * Created by brains on 2017/6/4.
 */

/**
 * 40. Combination Sum II
 * Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T
 *
 *
 * */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var temp=[],
        res=[];
    if(candidates==null||candidates.length==0){
        return res;
    }
    candidates.sort(function(a,b){
        return a-b;
    });
    combination(candidates,temp,target,0,res);
    return res;
};
function combination(nums,temp,remain,start,res){
    if(remain<0){
        return;
    }else if(remain==0){
        res.push(temp.slice(0));
    }else{
        for(var i=start;i<nums.length;i++){
            //如果和前面的数字重复，则跳过
            if(i>start&&nums[i]==nums[i-1]){
                continue;
            }
            temp.push(nums[i]);
            combination(nums,temp,remain-nums[i],i+1,res);
            temp.pop();
        }
    }
}
console.log(combinationSum2([1,1,2,3,4,5],5));