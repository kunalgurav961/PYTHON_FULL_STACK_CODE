
let registerForm = document.querySelector("form")

const registerUser = (e) => {
    e.preventDefault();
    let formData = {
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
    } 
    console.log("user registered Successfully");
    window.location = 'http://127.0.0.1:5500/js/Auth%20Project/protected/index.html'
}


registerForm.addEventListener("submit", registerUser)