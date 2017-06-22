/**
 * Created by brains on 2017/6/22.
 */

var a_game = function(pNum){
    var players = [];
    for(var i=1;i<=pNum;i++){
        players.push(i);
    }
    var flag=0;
    while(players.length>1){
        var outPlayerNum = 0,len=players.length;
        for(var i=0;i<len;i++){
            flag++;
            if(flag==3){
                flag=0;
                console.log("出局:"+players[i-outPlayerNum]);
                players.splice(i-outPlayerNum,1);
                outPlayerNum++;
            }
        }
    }
    return players[0];
};
a_game(8)