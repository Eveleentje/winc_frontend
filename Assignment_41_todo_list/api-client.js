
let myHeaders = new Headers({
    'Content-Type': 'application/json'
});

const apiUrl = new URL(`http://localhost:3000/`);
const list = document.getElementById("list");

async function getData() {

    list.innerHTML = "";

    try {
       let res = await fetch(apiUrl, {
            method: 'GET',
            headers: myHeaders
            
        }) 

        const resJson = await res.json();
        // console.log(resJson);

resJson.forEach((entry) => {
    const trashIcon = document.createElement("img");
trashIcon.src = "trash-can-solid.svg";
trashIcon.setAttribute("id", "deleteTask");
    const listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerHTML = entry.description;
    listItem.appendChild(trashIcon);
    listItem.setAttribute("id", entry._id);
})

    }
        catch(error) {
            console.error(error);
        }
};

function getInputValue() {
    let value = document.getElementById("new-task").value;
    return value;
};

async function postData() {
    try {
let taskDescription = getInputValue();

    const data = {description: taskDescription, done: false};

    let res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: myHeaders,
    });
    // console.log(res);
    getData();

    }
    catch(error) {
        console.error(error);
    }


};


async function deleteTaskFromList(id) {
    try {
        let res = await fetch(apiUrl + id, {
            method: 'DELETE',
            headers: myHeaders
        });

        getData();
    }
    catch(error) {
        console.error(error);
    }

}

// functie on click: get post met die id en delete?