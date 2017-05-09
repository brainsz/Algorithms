/**
 * Created by brains on 2017/5/9.
 */
/**
 *
 * 485. Max Consecutive Ones
 * Given a binary array, find the maximum number of consecutive 1s in this array.

 Example 1:
 Input: [1,1,0,1,1,1]
 Output: 3
 Explanation: The first two digits or the last three digits are consecutive 1s.
 The maximum number of consecutive 1s is 3.
 * */
//目的是在一个二进制的数组中，找出连续的1的个数

//思路:用一个变量维护连续的1的最大个数，另外用一个变量统计子数组中连续1的个数
//如果遍历到连续的1的个数大于最大个数，则把这个数字赋值给最大的

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max=0,
        subMax=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i]){
            subMax++;
        }else{
            if(subMax>max){
                max=subMax;
            }
            subMax=0;
        }
    }
    return max>subMax?max:subMax;
};
console.log(findMaxConsecutiveOnes([0]));