console.log("This is tut11")
let element = document.createElement('li');
let text = document.createTextNode('I am a text node')
element.appendChild(text);

//Add a class name to li element
element.className='childul';
element.id='createdLi';
element.setAttribute('titile','mytitle');
// element.innerText='shubham';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul)
// console.log(element);

let elem2 = document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);
// console.log(element)
let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'));