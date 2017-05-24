/**
 * Created by brains on 2017/5/24.
 */
/**
 * 162. Find Peak Element
 *A peak element is an element that is greater than its neighbors.

 Given an input array where num[i] ≠ num[i+1], find a peak element and return its index.

 The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

 You may imagine that num[-1] = num[n] = -∞.

 For example, in array [1, 2, 3, 1], 3 is a peak element and your function should return the index number 2.
 *
 *
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    //判断0和1的情况
    if(nums.length==0||nums.length==1) {
        return 0;
    }
    //判断2的情况
    if(nums.length==2){
        if(nums[0]<nums[1]){
            return 1;
        }else{
            return 0;
        }
    }
    if(nums[nums.length-1]>nums[nums.length-2]){
        return nums.length-1;
    }
    for(var i=0;i<nums.length-2;i++){
        if(nums[i+1]>nums[i]&&nums[i+1]>nums[i+2]){
            return i+1;
        }
    }
    return 0;
};
console.log(findPeakElement([1,2,3,1]))