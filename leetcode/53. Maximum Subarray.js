/**
 * Created by brains on 2017/5/10.
 */
/**
 * 53. Maximum Subarray
 *
 * Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

 For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
 the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 *
 * */


/**
 * @param {number[]} nums
 * @return {number}
 */
    //假设nums[i]之前的连续段的和为sum
    //1.如果sum>=0,就可以和nums[i]拼接在一起构成新的sum，加上一个正数肯定更大
    //2.如果sum<0,就不用和nums[i]拼接在一起了，不管nums[i]多小，加上一个负数肯定更销售
    //但是因为需要求连续的数组元素，所有需要把这个连续的数值和全局记录的最大值进行比较
    //
var maxSubArray = function(nums) {
    var sum=0,
        max_sum=Number.MIN_VALUE;
    for(var i=0;i<nums.length;i++){
        if(sum>=0){
            sum+=nums[i];
        }else{
            //把当前值赋值给sum，重新开始计数
            sum=nums[i];
        }
        //如果sum大于当前全局最大值，则赋值给max_sum
        if(sum>max_sum){
            max_sum=sum;
        }
    }
    return max_sum;
};
console.log(maxSubArray([-1]));