/**
 * Created by brains on 2017/5/16.
 */
/**
 * 118. Pascal's Triangle
 *
 * Given numRows, generate the first numRows of Pascal's triangle.

 For example, given numRows = 5,
 Return

 [
 [1],
 [1,1],
 [1,2,1],
 [1,3,3,1],
 [1,4,6,4,1]
 ]
 *
 * */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var result=[];
    if(numRows==0){
        return result;
    }
    for(var i=1;i<=numRows;i++){
        var temp=[];
        //加入左边第一个1
        temp.push(1);
        if(i==1){
            result.push(temp.slice(0));
            continue;
        }
        //
        var prev=result[i-2];

        for(var j=0;j<i-2;j++){
            temp.push(prev[j]+prev[j+1]);
        }
        //加入右边第一个1
        temp.push(1);
        result.push(temp.slice(0))
    }
    return result;
};

console.log(generate(4));

