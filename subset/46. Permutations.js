/**
 * Created by brains on 2017/6/4.
 */
/**
 * 46. Permutations
 *
 * Given a collection of distinct numbers, return all possible permutations.
 *
 * */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var temp=[],
        res=[];
    backtrack(res,temp,nums);
    return res;
};
function backtrack(res,temp,nums){
    if(temp.length==nums.length){
        res.push(temp.slice(0));
    }else{
        for(var i=0;i<nums.length;i++){
            //如果元素已经存在,则跳过
            if(temp.indexOf(nums[i])!=-1){
                continue;
            }
            temp.push(nums[i]);
            backtrack(res,temp,nums);
            temp.pop();
        }
    }
}
console.log(permute([1,2,3]));