/**
 * Created by brains on 2017/5/9.
 */
/**
 *561. Array Partition I
 *
 *Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

 Example 1:
 Input: [1,4,3,2]

 Output: 4
 Explanation: n is 2, and the maximum sum of pairs is 4.
 Note:
 n is a positive integer, which is in the range of [1, 10000].
 All the integers in the array will be in the range of [-10000, 10000].
 * */
//给2n个数进行分组，分成(a1,b1),(a2,b2).....(an,bn)，
//求每组数的最小值之和的最大值
/**
 * @param {number[]} nums
 * @return {number}
 */

    //解题思路：需要在每个数组中选出最小的数字，然后加起来的和是最大的
    //先把数组进行排序,要尽可能的大，只能取第一个数开始，然后隔一个数相加，这样就可以保证最大
    //
var arrayPairSum = function(nums) {
    nums.sort(function(a,b){
        return a-b;
    })
    var sum=0;
    for(var i=0;i<nums.length;i+=2){
        sum+=nums[i];
    }
    return sum;
};
console.log(arrayPairSum([1,3,2,4]));