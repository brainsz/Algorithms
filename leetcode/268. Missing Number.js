/**
 * Created by brains on 2017/5/10.
 */
/**
 * 268. Missing Number
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

 For example,
 Given nums = [0, 1, 3] return 2.
 *
 * */
/**
 * @param {number[]} nums
 * @return {number}
 */
    //思路:
var missingNumber = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    })
    for(var i=0;i<nums.length;i++){
        if(i!=nums[i]){
            return i;
        }
    }
    return i;
};
console.log(missingNumber([0]));