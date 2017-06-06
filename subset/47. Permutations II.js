/**
 * Created by brains on 2017/6/4.
 */
/**
 * 47. Permutations II
 *
 * Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 *
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var temp=[],
        res=[];
    if(nums==null||nums.length==0){
        return res;
    }
    nums.sort(function(a,b){
        return a-b;
    });
    var used={};
    for(var i=0;i<nums.length;i++){
        used[i]=0;
    }
    backtrack(nums,used,temp,res);
    return res;
};
function backtrack(nums,used,temp,res){
    if(temp.length==nums.length){
        res.push(temp.slice(0));
        return;
    }
    for(var i=0;i<nums.length;i++){
        //如果第一个重复元素的前面的元素没有在结果中，不需要递归
        if(i>0&&!used[i-1]&&nums[i]==nums[i-1]){
            continue;
        }
        if(!used[i]){
            used[i]=1;
            temp.push(nums[i]);
            backtrack(nums,used,temp,res);
            temp.pop();
            used[i]=0;
        }
    }
}

console.log(permuteUnique([1,1,2]));