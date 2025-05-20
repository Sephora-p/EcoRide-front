import Route from "./Route.js";

export const allRoutes = [

  new Route("/", "Accueil", "/pages/home.html",[]),
  new Route("/covoiturage", "Covoiturage", "/pages/covoiturage.html",[],"/js/covoiturage.js"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html",["disconnected"],"/js/auth/signin.js",),
  new Route("/signup", "Inscription", "/pages/auth/signup.html",["disconnected"],"/js/auth/signup.js"),
  new Route("/compte", "Mon compte", "/pages/auth/compte.html",["utilisateur","admin"]),
  new Route("/password", "Réinitialiser", "/pages/auth/password.html",["utilisateur","admin","employé"]),
  new Route("/contact", "Contact", "/pages/contact.html",[]),
  new Route("/rgpd", "Mentions légales", "/pages/rgpd.html",[]),
  new Route("/resultats", "resulats", "/pages/resultats.html",[],"/js/resultats.js"),
];


export const websiteName = "EcoRide";
