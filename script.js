const firebaseURL = "https://pitterpatter-f9978-default-rtdb.firebaseio.com/";
const jsonEXT = "users.json";


var selectedRow = null;

function authenticateUser(user) {

}


function loginUser() {
    const $name = $("name").val();
    const $number = $("number").val();
    const $password = $("password").val();

    
}

function registerUser() {
    const $name = $("name").val();
    const $number = $("number").val();
    const $password = $("password").val();
    
    
    if(!$name || $number || $password) {
        alert("Registration incomplete")
    } else {
        let newUser = {
            name: $name,
            number: $number,
            password: $password,
            posts: []
        }
        $.ajax({
            type: "PUT",
            url:`${firebaseURL}${$name}${jsonEXT}`,
            data: JSON.stringify({...newUserObj}),
            success: (user) => {
                newUsertoD(user);
            },
            error: (error)=> {
                console.log("PUT error", error)
            }
        })
    }
}

function newUsertoD(userData) {
    let user = `
    <div class="newUser">
      <div >${userData.name}</td>
      <div >${userData.number}</td>
      <div >${userData.password}</td> 
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
        //   $("#feed").empty();
        //   Object.keys(data).forEach((user)=>{
        //     // console.log("Pet", data[pet]);
        //     /*
        //     let postsArray = data[user].posts;
        //     postsArray.forEach((post)=>{
        //         // Logic determining if CRUD btns should exist
        //         // append to feed lists
        //     })

        //     */
        //     addPost(data[user].posts);
        //   })
        let parsedData = JSON.parse(data)
        console.log("Data: ", parsedData);
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




