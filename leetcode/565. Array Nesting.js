/**
 * Created by brains on 2017/6/1.
 */
/**
 *
 * 565. Array Nesting
 *
 *
 * */


/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {

    var n=nums.length,cur,start,next;
    if(n==0){
        return 0;
    }
    var used={};
    var res=0;
    for(start=0;start<n;start++){
        if(!used[start]){
            var cnt=1;
            //cur保存当前值
            cur=start;
            //next是nums[cur]的值
            next=nums[cur];
            //当nums[cur]的值不等于next时
            while(next!=start){
                //加1
                cnt++;
                //把next的值赋给cur
                cur=next;
                //继续下一个next的值
                next=nums[cur];
                //标记当前这个数字已经访问
                used[cur]=1;
            }
            res=Math.max(res,cnt);
        }
    }
    return res;
};

console.log(arrayNesting([5,4,0,3,1,6,2]));