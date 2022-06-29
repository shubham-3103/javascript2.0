// console.log('This is tut 14');
// localStorage.setItem('Name1','Shubham1');
// localStorage.setItem('Name2','Shubham2');
// localStorage.setItem('Name3','Shubham3');
// console.log(localStorage.getItem('Name1'));
// console.log(window.localStorage);
// localStorage.clear();

//exercise
// Creating the header and injecting it into body
const body = document.body;
const heading = document.createElement("h1");
heading.innerText = "Welcome to CodeWithHarry";
body.append(heading);

// Creating div and injecting into body
const div = document.createElement("div");
div.innerText = "This is an editable div";
div.id = "edit";
body.append(div);

// Whenever user Clicks on the div
document.getElementById("edit").addEventListener("click", () => {
    div.contentEditable = "true"; // It will make the content inside the div editable
});

// Whenever user Clicks away from the div, save the content inside local storage
document.getElementById("edit").addEventListener("blur", () => {
    localStorage.setItem("editable-div", document.getElementById("edit").innerText); // Saving the content inside local storage
});