const arr = [
    {id: 7, email: "michael.lawson@reqres.in", first_name: "Michael", last_name: "Lawson"},
    {id: 8, email: "lindsay.ferguson@reqres.in", first_name: "Lindsay", last_name: "Ferguson"},
    {id: 9, email: "tobias.funke@reqres.in", first_name: "Tobias", last_name: "Funke"},
    {id: 10, email: "byron.fields@reqres.in", first_name: "Byron", last_name: "Fields"},
    {id: 11, email: "george.edwards@reqres.in", first_name: "George", last_name: "Edwards"},
    {id: 12, email: "rachel.howell@reqres.in", first_name: "Rachel", last_name: "Howell"}
];


let button = document.querySelector('#btn')
let body = document.querySelector('body')
let table = document.querySelector('#table')
let delBtn = document.querySelectorAll('.del')


button.addEventListener('click', displayTable);
delBtn.addEventListener('click', removeUser);


function displayTable(){arr.forEach((user) => {showShit(user.first_name, user.id, user.email)});}

function showShit(fName, id, email) {
    // e.preventDefault();

    // let textContent = document.querySelector('#elemText').value;
    
    let element = document.createElement('tr')
    
    element.innerHTML = `
        <td>${fName}</td>
        <td>${id}</td>
        <td>${email}</td>
        <td><button class = "del">X</button></td>
    `
    table.appendChild(element)
    // console.log(4350498534)
}


function removeUser(e) {
    if(el.classList.contains('del')) {
        el.parentElement.parentElement.remove();
    }
    console.log(325243)   
}