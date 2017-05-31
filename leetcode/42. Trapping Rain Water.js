/**
 * Created by brains on 2017/5/31.
 */
/**
 *
 42. Trapping Rain Water
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

 For example,
 Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6
 * */

//解题思路:对于某一点来说，先分别找出左右的最大高度，然后取其中的较小值，如果本身的高度低于
//较小值得话，可以蓄水。

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height==null||height.length==0){
        return 0;
    }
    var leftMax=height[0],
        rightMax=height[height.length-1],
        res=0,
        i=1,
        j=height.length-2;
    while(i<=j){
        if(leftMax<rightMax){
            //如果左边最大值减去当前点的值大于0，则需要蓄水
            res+=Math.max(0,leftMax-height[i]);
            //更新左边的最大值
            leftMax=Math.max(leftMax,height[i]);
            i++;
        }else{
            //如果右边最大值减去当前点的值大于0，则需要蓄水
            res+=Math.max(0,rightMax-height[j]);
            //更新右边的最大值
            rightMax=Math.max(rightMax,height[j]);
            j--;
        }
    }
    return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));