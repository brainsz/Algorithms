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

/**
 *思路:从数组的第1项开始,对数组进行求和,用一个map存储sum的值，如果已经存储过，则对应的value+1
 * 判断sum-k是否在map中，如果在map中，则加上对应的value值
 * map中首先存储一对key value值(0,1)
 * */

var subarraySum = function (nums, k) {
    var sum = 0,
        count = 0,
        hashMap = {};
    hashMap[0] = 1;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (hashMap[sum - k]) {
            count += hashMap[sum - k];
        }
        if (hashMap[sum]) {
            hashMap[sum] += 1;
        } else {
            hashMap[sum] = 1;
        }
    }
    return count;
};
console.log(subarraySum([1, 1, 1], 2));