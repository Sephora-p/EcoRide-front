import Route from "./Route.js";

export const allRoutes = [

  new Route("/", "Accueil", "/pages/home.html"),
  new Route("/covoiturage", "Covoiturage", "/pages/covoiturage.html"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html"),
  new Route("/signup", "Inscription", "/pages/auth/signup.html"),
  new Route("/compte", "Mon compte", "/pages/auth/compte.html"),
  new Route("/password", "Réinitialiser", "/pages/auth/password.html"),
  new Route("/allResa", "Ma réservation", "/pages/reservation/allResa.html"),
  new Route("/contact", "Contact", "/pages/contact.html"),
   new Route("/rgpd", "Mentions légales", "/pages/rgpd.html")
];


export const websiteName = "EcoRide";
