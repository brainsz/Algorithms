/**
 * Created by brains on 2017/5/16.
 */
/**
 * 380. Insert Delete GetRandom O(1)
 *
 *
 * Design a data structure that supports all following operations in average O(1) time.

 insert(val): Inserts an item val to the set if not already present.
 remove(val): Removes an item val from the set if present.
 getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
 *
 * */

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    var createNew=function(){
        this.dataArr=new Map();
    }
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.dataArr.has(val)){
        return false;
    }else{
        this.dataArr[val]=1;
        return true;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.dataArr.get(val)){
        return false;
    }else{
        this.dataArr.delete(val);
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    //计算两个数之间的随机数
    function selectfrom (lowValue,highValue){
        var choice=highValue-lowValue+1;
        return Math.floor(Math.random()*choice+lowValue);
    }
    var num=selectfrom(1,this.dataArr.size);
    return [...this.dataArr.keys()][num];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
var obj = Object.create(RandomizedSet);

console.log();