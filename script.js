document.getElementById('name').addEventListener('change', validateName)
document.getElementById('email').addEventListener('change', validateEmail)
document.getElementById('password').addEventListener('change', validatePassword)


function validateName(){
    const name = document.getElementById('name').value
    const nameError = document.getElementById('nameError')
    if(name.length < 3){
        nameError.innerText = "Name must be at least 3 characters long."
        return false;
    }else{
        nameError.innerText = ""
        return true;
    }
}

function validateEmail(){
    const email = document.getElementById('email').value
    const emailError = document.getElementById('emailError')
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/
    if(!emailRegex.test(email)){
        emailError.innerText = "Please enter valid email."
        return false;
    }else{
        emailError.innerText = ""
        return true;
    }
}

function validatePassword(){
    const password = document.getElementById('password').value
    const passwordError = document.getElementById('passwordError')
    if(password.length < 6){
        passwordError.innerText = "password must be at 6 characters long"
        return false;
    }else{
        passwordError.innerText = ""
        return true;
    }
}

function handleSubmit(){
    const isvalidName = validateName()
    const isValidEmail = validateEmail()
    const isValidPassword = validatePassword()

    if(isValidEmail && isvalidName && isValidPassword){
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }

        console.log("Form Data in JSON", JSON.stringify(formData))
        alert("Form submitted Successfully")
    }else{
        alert("Form submitted UnSuccessfully")
    }
}