import 'bootstrap/dist/css/bootstrap.css'

const tb = document.getElementById('tb');
const url = 'https://alexanderpihl.com/cors/api/persons';

fetch(url + "/all")
    .then(res => fetchWithErrorCheck(res))
    .then((data) => {
        const trs = data.all.map((user) => {
            return `<tr><td>${user.id}</td><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.phone}</td>
            <td><button class="btn btn-link" id="${user.id}" value="btn_DeletePerson">delete</button>/
            <button class="btn btn-link" id="${user.id}" value="btn_UpdatePerson" data-toggle="modal" data-target="#editPersonModal">edit</button>
            </td></tr>`;

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



//Function for POST, PUT and DELETE
function makeOptions(method, body) {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}


//Add user
document.getElementById("btn_InsertPerson").onclick = () => {
    const fname = document.getElementById('inp_InsertFirstName').value;
    const lname = document.getElementById('inp_InsertLastName').value;
    const phone = document.getElementById('inp_InsertPhone').value;

    const data = {
        firstName: fname,
        lastName: lname,
        phone: phone

    };
    const options = makeOptions("POST", data);
    fetch(url, options)
        .then(res => fetchWithErrorCheck(res))
        .catch(err => {
            if (err.status) {
                err.fullError.then(e => console.log(e.detail))
            }
            else { console.log("Network error"); }
        })

};



//Click handler for Delete and Edit
var outer = document.getElementById("tb");
outer.onclick = function (e) {
    var target = e.target;

    
    //Delete user
    if (target.value == "btn_DeletePerson") {

        console.log("delete");
        console.log(target.id);

        const options = makeOptions("DELETE");
        fetch(`${url}/delete/${target.id}`, options)
            .then(res => fetchWithErrorCheck(res))
            .catch(err => {
                if (err.status) {
                    err.fullError.then(e => console.log(e.detail))
                }
                else { console.log("Network error"); }
            })
    }


    //Edit user
    if (target.value == "btn_UpdatePerson") {

        console.log("edit");
        console.log(target.id);
        const id = target.id;

        //reset inputfields
        document.getElementById('inp_UpdateFirstName').value = '';
        document.getElementById('inp_UpdateLastName').value = '';
        document.getElementById('inp_UpdatePhone').value = '';

        //fetch uservalues from id and add to inputfield
        fetch(`${url}/${id}`)
            .then(res => fetchWithErrorCheck(res))
            .then(user => {

                document.getElementById('inp_UpdateFirstName').value = user.firstName;
                document.getElementById('inp_UpdateLastName').value = user.lastName;
                document.getElementById('inp_UpdatePhone').value = user.phone;

            })
            .catch(err => {
                if (err.status) {
                    err.fullError.then(e => console.log(e.detail))
                }
                else { console.log("Network error"); }
            })

        //If 'save changes' button in modal is clicked 
        document.getElementById('btn_edit').onclick = function () {

            const efname = document.getElementById('inp_UpdateFirstName').value;
            const elname = document.getElementById('inp_UpdateLastName').value;
            const ephone = document.getElementById('inp_UpdatePhone').value;
            const data = {
                firstName: efname,
                lastName: elname,
                phone: ephone
            };
            const options = makeOptions("PUT", data);
            fetch(`${url}/update/${id}`, options)
                .then(res => fetchWithErrorCheck(res))
                .catch(err => {
                    if (err.status) {
                        err.fullError.then(e => console.log(e.detail))
                    }
                    else { console.log("Network error"); }
                })
        };
    }


};

//reload site button
document.getElementById("btn_reloadSite").onclick = () => {
    location.reload();
}


