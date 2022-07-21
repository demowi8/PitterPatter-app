(function () {

    const firebaseURL = "https://pitterpatter-f9978-default-rtdb.firebaseio.com/";
    const jsonEXT = "users.json";
    const tweetsEXT = "/tweets/";

    const $ppFeed = $("#feed");
    const $loginSect = $("#mainBody");
    const $createPP = $("#mainColumn");
    const $loginBtn = $("#loginBtn");
    const $unameInput = $("#name");

    $createPP.hide();


function generateGuid() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1); 
}


//login User
//checks firebase 
function authenticateUser(userLoggedIn) {
    let authenticateUserPromise = new Promise((resolve, reject) => {
        $.ajax({
            url: `${firebaseURL}${jsonEXT}`,
            type: "GET",
            success: (data) => {
                let usersInDatabase = Object.keys(data); //Array of key properties
                let userExists = usersInDatabase.includes(userLoggedIn);//Checks if user exists returns true or false

                console.log(usersInDatabase);
                if (userExists) {
                    resolve(userLoggedIn)
                }else {
                    reject("No user exists!")
                }
            },
            error: (error) => {
                reject("Ajax call failed");
            }
        })
    }).then((usernameData) => {
        $loginSect.hide();
        $createPP.show();
        //executing function here to display data
        getPPUserFeed(usernameData);
    }).catch((error) => {
        console.log(error);
    })
}

function getPPUserFeed(userLoggedIn) {
    $.ajax({
        url: `${firebaseURL}${jsonEXT}`,
        type: "GET",
        success: function(data) {
            console.log("Data from get", data);
            let tweetDatahtml = "";
            $("#mainColumn").show();
            $("#textbox").attr('data-loggedInUser', userLoggedIn);
            $("#textbox").attr('data-editGuid', "null");
            for (let allUsers in data) {
                for (let tweetData in data[allUsers].tweets) {
                    if (data[allUsers].tweets[tweetData].user == userLoggedIn) {
                        console.log("Its a match!")
                        tweetDatahtml += 
                        `<div class="row">
                            <div class="column">
                                <div id="pitterpatter> 
                                    <h3 class ="user"> ${data[allUsers].tweets[tweetData].user}</h3>
                                    <p class="tweetBody"> ${data[allUsers].tweets[tweetData].text}</p>
                                    <p class=tweetTime"> ${new Date(data[allUsers].tweets[tweetData].date * 1000).toLocaleTimeString("en-US")}</p>
                                    
                                    <td><input data-btnGuid='${data[allUsers].tweets[tweetData].id}' class='edit' type='button' value='Edit'></td>
                                    <td><input data-btnGuid='${data[allUsers].tweets[tweetData].id}' class='delete' type='button' value='Delete'></td>
                                </div>
                            </div>
                        </div>`
                    } else {
                        tweetDatahtml += 
                        `<div class="row">
                            <div class="column">
                                <div id="pitterpatter> 
                                    <h3 class ="user"> ${data[allUsers].tweets[tweetData].user}</h3>
                                    <p class="tweetBody"> ${data[allUsers].tweets[tweetData].text}</p>
                                    <p class=tweetTime"> ${new Date(data[allUsers].tweets[tweetData].date * 1000).toLocaleTimeString("en-US")}</p>
                                </div>
                            </div>
                        </div>`
                    }
                }
            }
            $ppFeed.html(tweetDatahtml);

            //delete functionality
            $(".delete").click(function() {
                let $entireRow = $(this).closest('div.row');
                console.log($entireRow)
                deleteUserTweet(userLoggedIn, $(this).attr("data-btnguid"));
                $entireRow.hide();
            });

            //edit functionality
            $(".edit").click(function() {
                $("#btnSubmitTweet").hide();
                 
            })
        }
    })
}




})



