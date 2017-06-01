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
    //排序后解法,时间:o(nlogn)  空间:o(n)
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
var findUnsortedSubarray2 = function(nums) {
    //可以通过找到局部的最大最小值
    var r2lMin = nums.slice(0),
        l2rMax = nums.slice(0);
    r2lMin[nums.length-1]=nums[nums.length-1];
    l2rMax[0]=nums[0];
    for(var i=nums.length-2;i>=0;--i){
        r2lMin[i]=Math.min(nums[i],r2lMin[i+1]);
    }
    for(var i=1;i<nums.length;++i){
        l2rMax[i] = Math.max(nums[i], l2rMax[i - 1]);
    }
    var start, end;
    for (start = 0; start < nums.length; ++start) {
        if (nums[start] != r2lMin[start])
            break;
    }
    for (end = nums.length- 1; end >= 0; --end) {
        if (nums[end] != l2rMax[end])
            break;
    }
    return start >= end ? 0 : end - start + 1;
};

console.log(findUnsortedSubarray2([1,3,2,2,2]));