/**
 * Created by brains on 2017/5/31.
 */
/**
 * 119. Pascal's Triangle II
 *
 * Given an index k, return the kth row of the Pascal's triangle.

 For example, given k = 3,
 Return [1,3,3,1]
 *
 * */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var v=[];
    if(rowIndex<0){
        return v;
    }
    for(var i=0;i<rowIndex;i++){
        v.push(0);
    }

    for(var j = 0; j < rowIndex; ++j)
    {
        v[j] = 1;
        for(var k =rowIndex-1; k > 0; --k)
        {
            v[k] = v[k-1] + v[k];
        }
        v[0] = 1;
    }
    v[j]=1;
    return v;
};
console.log(getRow(3));
