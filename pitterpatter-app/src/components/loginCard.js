import './loginCard.css';

const LoginCard = () => {
    return (
        <>
                    <div class="loginCard" id="loginCard">
                <form id="login">
                    <h2>Login</h2>
                    <div>
                        <label for="name">UserName</label>
                        <input type="text" id="name" placeholder="Your Name?" class="login" name="name" value="">
                    </div>
                    <div>
                        <label id="number" for="number">Number</label>
                        <input type="number" id="number" placeholder="Your Number?" class="login" name="number" value="">
                    </div>

                    <button id="loginBtn" onclick="loginUser()" class="loginBtn" type="button">Submit</button>
                </form>

            </div>
        </>
    )
}