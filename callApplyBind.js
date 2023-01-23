let student = {age:30};

var printAge = function(){
    return this.age;
};

var printAllAge = function(a,b,c){
    return this.age+a+b+c;
};
//call 
console.log(printAge.call(student));
//apply
let arrAge =[1,2,3];
//bind
console.log(printAllAge.apply(student,arrAge));

var bound=printAllAge.bind(student);
console.log(bound(1,2,3));
