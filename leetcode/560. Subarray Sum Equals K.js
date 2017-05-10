/**
 * Created by brains on 2017/5/9.
 */
/**
 * 560. Subarray Sum Equals K
 *
 * Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

 Example 1:
 Input:nums = [1,1,1], k = 2
 Output: 2
 *
 * */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    nums.sort(function(a,b){
        return a-b;
    })
    var left=0,
        right=nums.length-1,
        count=0;
    while(left<right){

        if((nums[left]+nums[right])==k){
            count++;
        }
       if((nums[left]+nums[right])<k){
            left++;
        }else{
            right--;
        }
    }
    return count;
};
console.log(subarraySum([1,2,3],3));