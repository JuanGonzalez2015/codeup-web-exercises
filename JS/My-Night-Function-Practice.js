

var numify  = isNaN && null && true && false && typeof "string" && "5"

var p4 = 357 * 9
console.log("this is:" + p4)
var p3 = 2 * 5;
console.log("this is: " + p3)
function practice(p1,p2){
    if(p1 === numify && p2 === numify ){
return "that is not a number"
    }
return p3 * p1 * p2 + p4;
}

console.log(practice("9",5,))



//Christians Numify Function///

function numify(num){
    console.log(num);
    if(typeof num === "string" || typeof num === "number")
        return Number(num)
    return NaN;
}

