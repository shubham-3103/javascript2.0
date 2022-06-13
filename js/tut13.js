// console.log('This is tut 13');
// let btn = document.getElementById('btn');
// btn.addEventListener('click',func1);
// btn.addEventListener('dblclick',func2);
// btn.addEventListener('mousedown',func3);


// function func1(e){
//     console.log("thanks");
//     e.preventDefault(); //it will ignore all prblm
// }

// function func2(e){
//     console.log("thanks for double clicking");
//     e.preventDefault(); //it will ignore all prblm
// }
// function func3(e){
//     console.log("single, double, mouse wheel");
//     e.preventDefault(); //it will ignore all prblm
// }

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},230)`
    console.log('You triggered mouse move event')
})