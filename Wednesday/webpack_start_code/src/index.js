import 'bootstrap/dist/css/bootstrap.css'

const tb = document.getElementById('tb');
const url = 'http://localhost:3333/api/users';

fetch(url)
    .then(res => fetchWithErrorCheck(res))
    .then((data) => {
        const trs = data.map((user) => {
            return `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.age}</td><td>${user.gender}</td><td>${user.email}</td></tr>`;
        });
        const tableBodyrStr = trs.join('');
        tb.innerHTML = tableBodyrStr;
    });


// Get user by id
const inp_InputID = document.getElementById("inp_UserByID");
const txt_InputID = document.getElementById('txt_UserByID');

document.getElementById("btn_UserByID").onclick = () => {
    const id = document.getElementById("inp_UserByID").value;
    fetch(url + "/" + id)
        .then(res => fetchWithErrorCheck(res))
        .then(user => {
            const userString = `Name: ${user.name} Age: ${user.age} Gender: ${user.gender} Email: ${user.email}`;
            document.getElementById("txt_UserByID").innerHTML = userString;
        });
}



// Fetch with errors
function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}


//Add user
document.getElementById("btn_InsertPerson").onclick = () => {


    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById("inp_InsertName").value,
            age: document.getElementById("inp_InsertAge").value,
            gender: document.getElementById("inp_InsertGender").value,
            email: document.getElementById("inp_InsertMail").value
        })
    }
    fetch(url, options);
    location.reload();
    
}

//Edit user
document.getElementById("btn_UpdatePerson").onclick = () => {

    const updateID = document.getElementById("inp_UpdateID").value;

    let options = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById("inp_UpdateName").value,
            age: document.getElementById("inp_UpdateAge").value,
            gender: document.getElementById("inp_UpdateGender").value,
            email: document.getElementById("inp_UpdateMail").value
        })
    }
    fetch(`${url}/${updateID}`, options);
    location.reload();
}

//Delete user
document.getElementById("btn_DeletePerson").onclick = () => {
    
    const deleteID = document.getElementById("inp_DeleteID").value;

    let options = {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json'
        }
     }   
     fetch(`${url}/${deleteID}`, options);
     location.reload();
}


