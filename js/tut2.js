console.log("This is tut 2");
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// i=5
// console.log('\n');
// while(i<10){
//     console.log(i);
//     i++;
// }
// i=15;
// console.log('\n');
// do{
//     console.log(i);
//     i++;
// }while(i<20);



let obj = {
    name:"SHubham Sharma",
    age: 22,
    os: "Ubuntu"
}
for(let key in obj){
    console.log(`the ${key} of object is ${obj[key]}`)
}


arr=[2,5,6,7,8,9];
arr.forEach(function(element,index){
    console.log(element,index);
});