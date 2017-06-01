/**
 * Created by brains on 2017/6/1.
 */

/**
 * 581. Shortest Unsorted Continuous Subarray
 *
 * Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

 You need to find the shortest such subarray and output its length.
 * */


/**
 * @param {number[]} nums
 * @return {number}
 */

    //思路:先对数组进行排序，排序之后，左右两边位置
    // 发生变化的元素的位置就是要求的范围
var findUnsortedSubarray = function(nums) {
    //排序后解法
    var sortArr=nums.slice(0);
    nums.sort(function(a,b){
        return a-b;
    });
    var start,end;
    for(start=0;start<nums.length;++start){
        if(nums[start]!=sortArr[start]){
            break;
        }
    }
    for(end=nums.length-1;end>=0;--end){
        if(nums[end]!=sortArr[end]){
            break;
        }
    }
    return start>=end?0:end-start+1;

};
console.log(findUnsortedSubarray([1,3,2,2,2]));