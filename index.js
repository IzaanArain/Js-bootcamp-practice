
function addTwoNum(a){

    return function add(b){
        return a+b;
    }
}

// const result=addTwoNum(3);
// console.log(result(4));

// const ans=addTwoNum(5)(6)
// console.log(ans);

function Timer(counter){

return function(){
   return counter+=1;
}
}

const tim=Timer(1);
console.log(tim());
console.log(tim());
console.log(tim());


function timer1(counter){

}
