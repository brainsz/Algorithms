/**
 * Created by brains on 2017/5/26.
 */
/**
 * 11. Container With Most Water
 *
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

 Note: You may not slant the container and n is at least 2.

 Subscribe to see which companies asked this question.
 *
 * */


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i=0,
        j=height.length-1,
        maxS=0,
        thisS=0;
    while(i!=j){
        thisS=Math.min(height[i],height[j])*(j-i);
        maxS=thisS>maxS?thisS:maxS;
        if(height[i]>height[j]){
            j--;
        }else{
            i++;
        }
    }
    return maxS;
};

console.log(maxArea([2,6,7,1,3,2,8,2,4]));

