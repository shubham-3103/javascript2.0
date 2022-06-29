// console.log('this is tut6')
// let name1 ='Shubham';
// let name2 = 'rohan';

// function greet(first,second){
//     console.log(`Happy birthday ${first}`);
//     console.log(`Happy Birthday ${second}`);
//     return first.length + second.length;
// }

// greet(name1,name2);
// let val = greet(name1,name2);
// console.log(`Sum of string of both variable is: ${val}`);

// const myobj={
//     name: "SkillF",
//     game: function(){
//         return "GTA";
//     }
// }
// console.log(myobj.game());

// arr=['fruit','vegetable','furniture'];
// arr.forEach(function(element,index){
//     console.log(element,index);
// })

// let/const has block level scope!!!!!!!!!!!!!!
// var has function level scope!!!!!!!!!!!!!!!!!
{
    var i= 500;
    console.log(i);
}
console.log(i);
function ui(name){
    let i=9;
    console.log("function i",i);
    return `This is a ${name} UI`;
}
console.log(ui("Shubham"),i);