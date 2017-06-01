/**
 * Created by brains on 2017/6/1.
 */
/**
 * 26. Remove Duplicates from Sorted Array
 *
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

 Do not allocate extra space for another array, you must do this in place with constant memory.

 For example,
 Given input array nums = [1,1,2],

 Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
 * */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i=nums.length-1;i>0;i--){
        if(nums[i]==nums[i-1]){
            nums.splice(i,1)
        }
    }
    return nums.length;
};
var removeDuplicates2 = function(nums) {
    return (new Set(nums)).size;
};

console.log(removeDuplicates2([1,1,2]));