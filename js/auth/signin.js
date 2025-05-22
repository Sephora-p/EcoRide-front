const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // appeler l'API pour vérifier les credentials en BDD//

    if(mailInput.value == "utilisateur@mail.com" && passwordInput.value == "1Vhdgft(_egd"){
       
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

        if(mailInput.value == "employe@mail.com" && passwordInput.value == "uhTà6hdo@j"){
       
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

        if(mailInput.value == "admin@mail.com" && passwordInput.value == "pheB_4FHys"){
       
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