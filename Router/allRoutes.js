import Route from "./Route.js";

export const allRoutes = [

  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/covoiturage", "Covoiturage", "/pages/covoiturage.html"),
  new Route("/signin", "Connexion", "/pages/authentification/signin.html"),
  new Route("/signup", "Inscription", "/pages/authentification/signup.html"),
  new Route("/compte", "Mon compte", "/pages/authentification/compte.html"),
  new Route("/editPassword", "changement de mot de passe", "/pages/authentification/editPassword.html"),
  new Route("/allResa", "Ma réservation", "/pages/reservation/allResa.html"),
  new Route("/contact", "Contact", "/pages/contact.html"),
];


export const websiteName = "EcoRide";
