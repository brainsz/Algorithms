/**
 * Created by brains on 2017/5/15.
 */
/**
 * 78. Subsets
 *
 * Given a set of distinct integers, nums, return all possible subsets.

 Note: The solution set must not contain duplicate subsets.

 For example,
 If nums = [1,2,3], a solution is:

 [
 [3],
 [1],
 [2],
 [1,2,3],
 [1,3],
 [2,3],
 [1,2],
 []
 ]
 *
 * */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

    //位运算法，用二进制位数0和1代表nums中各个数字是否存在，刚好遍历完所有的数字
var subsets = function(nums) {
    var max=1<<nums.length,
        result=[];
    for(var i=0;i<max;i++){
        var j=i,
            temp=[],
            index=0;
        while(j>0){
            //判断j的最后一位是否为1
            if(j&1){
                temp.push(nums[index]);
            }
            index++;
            j=j>>1;
        }
        result.push(temp);
    }
    return result;
};
console.log(subsets([1,2,3,4,5]));
