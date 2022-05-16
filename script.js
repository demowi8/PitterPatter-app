const firebaseURL = "https://pitterpatter-f9978-default-rtdb.firebaseio.com/";
const jsonEXT = "users.json";





function loginUser() { 
    const lname = document.getElementById("name").value;
    const lpassword = document.getElementById("password").value;
    
    if(lname=="") {
        alert("Enter name");
    } else if(lpassword==""){
        alert("Enter password");
    } else {
        authenticateUser(lname, lpassword);
    }   
}

//checks firebase 
function authenticateUser(name, password) {
    if(!name == firebaseURL.$name && !password == firebaseURL.$password) {
        alert("Incorrect username or password")
    }else {
        feedToggleShowP();
    }
}

//get main column element and show entire feed
//hide login column
function feedToggleShowP() {
    
}

//get id of phone number and register button
//show new button with registerUser function and phone number input field  
function showRegisterField() {
    const numField = document.getElementById("number").style;
    return numField.visibility.replace('hidden', 'visible');
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



function newPost(postData) {
    let post = `
    <div class="newPatter">
      <div class="topic">${postData.Topic}</div>
      <div class="content">${postData.content}</div>
      <div class="actionBtns">
      <button class="deleteBtn" onclick="onDelete()" type="button">Delete</button>
      <button class="editBtn" onclick="onEdit()" type="button">Edit</button>
      </div>
    </div>`

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
          console.log("Retrieving Data: ", data)
          
          $("#feed").empty();
          Object.keys(data).forEach((user)=>{

            let postsArray = data[user].posts;
            postsArray.forEach((post)=>{
                // Logic determining if CRUD btns should exist
                // append to feed lists
            })

            addPost(data[user].posts);
          })
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




