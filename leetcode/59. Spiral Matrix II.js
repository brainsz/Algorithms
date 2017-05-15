/**
 * Created by brains on 2017/5/15.
 */
/**
 * 59. Spiral Matrix II
 *
 *Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

 For example,
 Given n = 3,

 You should return the following matrix:
 [
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
 ]
 * */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    if(n<0){
        n=0;
    }
    //生成一个二维数组
    var matrix=[];
    for(var i=0;i<n;i++){
        matrix[i]=[];
        for(var j=0;j<n;j++){
            matrix[i][j]=0;
        }
    }
    var counter=1;
    //左右上下四个边界
    var left=0,
        right=matrix[0].length-1,
        top=0,
        bottom=matrix.length-1,
        i;
    while(true){
        //上边，自左至右
        for (i = left; i <= right; i++) {
            matrix[top][i] = counter++;
        }
        if (++top > bottom) {
            break;
        }

        //右边，自上至下
        for (i = top; i <= bottom; i++) {
            matrix[i][right] = counter++;
        }
        if (left > --right) {
            break;
        }

        //下边，自右至左
        for (i = right; i >= left; i--) {
            matrix[bottom][i] = counter++;
        }
        if (top > --bottom) {
            break;
        }

        //左边，自下至上
        for (i = bottom; i >= top; i--) {
            matrix[i][left] = counter++;
        }
        if (++left > right) {
            break;
        }
    }
    return matrix;
};
console.log(generateMatrix(4));