console.log('tut3');
var name = 'shubham';
var channel;
// channel = 'codewithshubham';
var marks = 34;
console.log(name,channel,marks);
const fruit='orange';
// fruit='mango';
console.log(fruit);
console.warn('This is warning');
city='pilani';
var name1 = `shu'bh"h'am`;
console.log(name1);

{
    let city = 'AJmer';
    city='jaipur';
    console.log(city);
}
console.log(city);

const arr1 = [1,2,5,4,3,2];
// arr1.push(45);
console.log(arr1);  
let stmarks={
    shubham: 20,
    rohan: 50,
    sidd: 10
}
console.table(stmarks);
function print(x){
    console.log(x);
}
print(stmarks);
console.log(typeof(stmarks));

let html = `This is my heading`;

let fruit1 = 'mango';
let fruit2 = 'apple';
let myHtml = `<h1> i like to eat </h1>
              <p> hello ${fruit1} and ${fruit2} 
                `;
// console.log(myHtml);
// let myHtml = document.body.innerHTML;
// document.getElementById("demo").innerHTML = myHtml;
document.body.innerHTML = myHtml;