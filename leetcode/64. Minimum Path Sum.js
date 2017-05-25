/**
 * Created by brains on 2017/5/15.
 */
/**
 * 64. Minimum Path Sum
 *
 *
 *Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

 Note: You can only move either down or right at any point in time.
 * */

/**
 * @param {number[][]} grid
 * @return {number}
 */
    //思路:在一个m*n的网格中，从左上角开始到右下角结束，找到一条路径的和最小
    //下一个状态的和是由上一个状态的左边或者上边的最小点的决定的
var minPathSum = function(grid) {
    var rows=grid.length;
    if(rows==0){
        return 0;
    }
    var cols=grid[0].length;
    if(cols==0){
        return 0;
    }
    if(rows==1&&cols==1){
        return grid[0][0];
    }
    //把所有的存储到一个二维数组中
    var dp=[];
    for(var i=0;i<rows;i++){
        var temp=[];
        for(var j=0;j<cols;j++){
            temp.push(grid[i][j]);
        }
        dp.push(temp);
    }
    //初始化第一行
    for(var i=1;i<rows;i++){
        dp[i][0]+=dp[i-1][0];
    }
    //初始化第一列
    for(var j=1;j<cols;j++){
        dp[0][j]+=dp[0][j-1];
    }
    //
    for(var i=1;i<rows;i++){
        for(var j=1;j<cols;j++){
            dp[i][j]+=Math.min(dp[i-1][j],dp[i][j-1]);
        }
    }
    return dp[rows-1][cols-1];

};
console.log(minPathSum([[1,2,3],[4,5,6],[7,8,9]]))