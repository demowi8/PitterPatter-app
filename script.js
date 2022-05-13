const firebaseURL = "https://pitterpatter-f9978-default-rtdb.firebaseio.com/";
const jsonEXT = "users.json";


var selectedRow = null;


function addUser() {
    const $name = $("name").val();
    const $number = $("number").val();
    const $password = $("password").val();

    if(!$name || $number || $password) {
        alert("Registration incomplete")
    } else {
        let newUser = {
            name: $name,
            number: $number,
            password: $password
        }
        $.ajax({
            type: "PUT",
            url:`${firebaseURL}${$name}${jsonEXT}`,
            data: JSON.stringify({...newUserObj}),
            success: (user) => {
                newUser(user);
            },
            error: (error)=> {
                console.log("PUT error", error)
            }
        })
    }
}

function newUser(userData) {
    let user = `
    <div class="newUser">
      <div class="topic">${userData.name}</td>
      <div class="content">${userData.number}</td>
      <div class="content">${userData.number}</td> 
      <div class="actionBtns">
      <button class="deleteBtn" onclick="onDelete()" type="button">Delete</button>
      <button class="editBtn" onclick="onEdit()" type="button">Edit</button>
      </div>
    </div>`

    $('#userlist').append(user);
}

function newPost(postData) {
    let post = `
    <tr class="newPatter">
      <td class="topic">${postData.Topic}</td>
      <td class="content">${postData.content}</td>
      <td class="actionBtns">
      <button class="deleteBtn" onclick="onDelete()" type="button">Delete</button>
      <button class="editBtn" onclick="onEdit()" type="button">Edit</button>
      </td>
    </tr>`

    $('#feed').append(post);
}
function addPost() {
    const $topic = $("#new-topic").val();
    const $content = $("#new-textbox").val();

    if(!$topic || !$content) {
        alert("Pitter incomplete")
    }
    else {
        let newPostObj = {
            Topic: $topic,
            content: $content
        }
        $.ajax({
            type: "PUT",
            url:`${firebaseURL}${$topic}${jsonEXT}`,
            data: JSON.stringify({...newPostObj}),
            success: (post) => {
                newPost(post);
            },
            error: (error)=> {
                console.log("PUT error", error)
            }
        })

    }
}

function getPosts() {
    $.ajax({
        type: "GET",
        url: `${firebaseURL}${jsonEXT}`,
        success: (data) => {
          // console.log("Retrieving Data: ", data)
          // remove current list
          $("#feed").empty();
          Object.keys(data).forEach((post)=>{
            // console.log("Pet", data[pet]);
            addPost(data[post]);
          })
        },
        error: (error) => {
          console.log("Error getting data", error)
        }
      })
}
function readPostData() {
    var formData = {};
    formData["new-topic"] = document.getElementById("new-topic").value;
    formData["new-textbox"] = document.getElementById("new-textbox").value;

    return formData;
}

function insertNewPost(post){
    var table = document.getElementById('feed').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell0 = newRow.insertCell(0);
    cell0.innerHTML = post.Topic;

    cell1 = newRow.insertCell(1);
    cell1.innerHTML = post.content;

    cell2 = newRow.insertCell(2);
    cell2.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("new-topic").value = selectedRow.cells[0].innerHTML;
    document.getElementById("new-textbox").value = selectedRow.cells[1].innerHTML;
}

function updatePost(formData) {
    selectedRow.cells[0].innerHTML = formData.Topic;
    selectedRow.cells[1].innerHTML = formData.content;
}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('feed').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("new-topic").value = selectedRow.cells[0].innerHTML;
    document.getElementById("new-textbox").value = selectedRow.cell[1].innerHTML;

    selectedRow = null;
}