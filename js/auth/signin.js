const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // appeler l'API pour vérifier les credentials en BDD//

    if(mailInput.value == "test@mail.com" && passwordInput.value == "123"){
       
        //Token//
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token)

        //Placer le token en cookie//
        setCookie("roleCookieName", "admin")

        window.location.replace("/");
    }

    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}