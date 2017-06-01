/**
 * Created by brains on 2017/6/1.
 */
/**
 *
 * 414. Third Maximum Number
 *
 * Given a non-empty array of integers, return the third maximum number in this array. If it does not exist,
 * return the maximum number. The time complexity must be in O(n).
 * */


/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    //第一种解法使用set
    if(nums.length==0){
        return 0;
    }
    nums.sort(function (a,b){
        return b-a;
    })
    return [...new Set(nums)].length>=3?[...new Set(nums)][2]:[...new Set(nums)][0];

};



var thirdMax2 = function(nums) {
    var first=-Number.MAX_VALUE,
        second=-Number.MAX_VALUE,
        third=-Number.MAX_VALUE;
    for(var i=0;i<nums.length;i++){
        if(nums[i]>first){
            third=second;
            second=first;
            first=nums[i];
        }else if(nums[i]>second&&nums[i]<first){
            third=second;
            second=nums[i];
        }else if(nums[i]>third && nums[i]<second){
            third=nums[i];
        }
    }
    return (third==-Number.MAX_VALUE||third==second)?first:third;
};

console.log(thirdMax2([3,3,4,3,4,3,0,3,3]));
