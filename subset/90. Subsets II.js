/**
 * Created by brains on 2017/6/4.
 */
/**
 * 90. Subsets II
 *
 * Given a collection of integers that might contain duplicates, nums, return all possible subsets.
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var temp=[],
        res=[];
    if(nums==null||nums.length==0){
        return res;
    }
    nums.sort(function(a,b){
        return a-b;
    })
    subsetDup(res,temp,0,nums)
    return res;
};
function subsetDup(res,temp,pos,nums){
    res.push(temp.slice(0))
    for(var i=pos;i<nums.length;i++){
        //去除重复数字,遇到重复数字则跳过
        if(i>pos&&nums[i]==nums[i-1]){
            continue;
        }
        temp.push(nums[i]);
        subsetDup(res,temp,i+1,nums);
        temp.pop();
    }
}
console.log(subsetsWithDup([1,2,3,3]));

