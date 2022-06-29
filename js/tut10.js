console.log("welcome to tut10");

let cont = document.querySelector('.no');
cont=document.querySelector('.container');
// console.log(cont.children); //only it shows element like div h1 li ul form etc
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(cont)
console.log(nodeName);
console.log(nodeType);
//NOde Type
/*
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType
*/
let container = document.querySelector('div.container');
console.log(container.children[1].children[0].children);
console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);

console.log(container.childElementCount);

console.log(container.firstElementChild.nextElementSibling)

 
