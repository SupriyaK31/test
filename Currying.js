let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(5);

let multiplyByTwo1 = multiply.bind(this, );
multiplyByTwo(3,2);


let multiply1=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo2= multiply1(2);
multiplyByTwo2(5);

let multiplyByThree3=multiply1(3);
multiplyByThree3(6);