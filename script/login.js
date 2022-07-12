import data from '../data/usuarios.js'
const submit = document.querySelector("#loginButtonSubmit");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailRegister = document.querySelector("#correoRegister");
const nombreRegister = document.querySelector("#nombreRegister");
const passwordRegister = document.querySelector("#passwordRegister");
const registerSubmit = document.querySelector("#registerSubmit");

const userLoged = JSON.parse(localStorage.getItem("user"));

if(userLoged){
    const loginButton = document.querySelector("#loginButton");
    const signup = document.querySelector('#signUpButton');
    signup.style.display = 'none';
    loginButton.textContent = `Hola ${userLoged.nombre}`
    loginButton.href = 'index.html';
    loginButton.addEventListener('click',()=>{
        alert('Proximamente pantalla perfil... ')
    })
}else{
    // seteo dos usuarios para probar.
    localStorage.setItem('data',JSON.stringify(data));
}

registerSubmit?.addEventListener("click", ()=>{
    if(emailRegister.value !==''&&passwordRegister.value !==''&&nombreRegister!=='' ){
        const userNew = {
            correo : emailRegister.value,
            nombre : nombreRegister.value,
            password: passwordRegister.value
        }
        data.push(userNew);
        localStorage.setItem('data',JSON.stringify(data));
        window.location.href = 'login.html'
        alert("Usuario Registrado correctamente");
    }else{
        alert('Complete los datos por favor...');
    }
} )


submit?.addEventListener("click",()=>{
    if(email.value !=='' && password.value !==''){
        const data = JSON.parse(localStorage.getItem('data'))
        const response = data.filter(e => email.value === e.correo && password.value === e.password)
        if(response.length !== 0)
        {
            localStorage.setItem("user",JSON.stringify(response[0]));
            
            window.location.pathname = 'index.html'
        }else {
            alert('contraseña y/o usuario incorrectos')
        }
    }else {
        alert('ingrese algun valor...')
    }
})