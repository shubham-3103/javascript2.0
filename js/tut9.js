console.log("Welcome to tut9");
/*
element selectors:
1. Single element selector
2. Multi element selector
*/


// 1. Single element selector
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element=element.parentNode;
element.style.color='red';
// element.innerText='Harry is a good boy';
element.innerHTML='<b>Harry is a good boy</b>';
// console.log(element.innerHTML)

let sel = document.querySelector('#myfirst');
sel=document.querySelector('.child'); //It select first occuring select bcoz it is single selector 
sel = document.querySelector('div'); 
sel.style.color='green';
// console.log(sel);

// 2. Multi element selector
let elems=document.getElementsByClassName('child');
elems=document.getElementsByClassName('container');
elems=document.getElementsByTagName('div');
// console.log(elems[0].getElementsByClassName('red'));
// console.log(elems)
// Array.from(elems).forEach(element => {
//     console.log(elems);
//     element.style.color='blue';
// })

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color='blue';
}