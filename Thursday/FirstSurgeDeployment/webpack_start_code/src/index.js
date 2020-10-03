import 'bootstrap/dist/css/bootstrap.css'

const tb = document.getElementById('tb');
const url = 'https://alexanderpihl.com/cors/api/persons';

fetch(url+"/all")
    .then(res => fetchWithErrorCheck(res))
    .then((data) => {
        const trs = data.all.map((user) => {
            return `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.phone}</td></tr>`;
        });
        const tableBodyrStr = trs.join('');
        tb.innerHTML = tableBodyrStr;
    });

// Fetch with errors
function fetchWithErrorCheck(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

// Get user by id
const inp_InputID = document.getElementById("inp_UserByID");
const txt_InputID = document.getElementById('txt_UserByID');

document.getElementById("btn_UserByID").onclick = () => {
    const id = document.getElementById("inp_UserByID").value;
    fetch(url + "/" + id)
        .then(res => fetchWithErrorCheck(res))
        .then(user => {
            const userString = `Firstname: ${user.firstName} Lastname: ${user.lastName} Phone: ${user.phone}`;
            document.getElementById("txt_UserByID").innerHTML = userString;
        });
}
