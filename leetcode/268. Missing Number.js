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
    //思路:先把num数组排序，然后循环数组的元素，如果对应下标和下标对应的元素不相等，则返回，如果没有找到，最后返回nums.length
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
//解法2:用一个哈希表存储数组的所有元素，然后从0到nums.length进行判断，是否包含了对应的下标i,如果不包括则返回
var missingNumber2 = function(nums) {
    var hashArr={};
    for(var i=0;i<nums.length;i++){
        hashArr[nums[i]]=1;
    }
    for(var i=0;i<nums.length;i++){
        if(!hashArr[i]){
            return i;
        }
    }
    return nums.length;
};
console.log(missingNumber2([0]));