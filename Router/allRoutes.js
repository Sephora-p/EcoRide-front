import Route from "./Route.js";

export const allRoutes = [

  new Route("/", "Accueil", "/pages/home.html",[]),
  new Route("/covoiturage", "Covoiturage", "/pages/covoiturage/covoiturage.html",[],"/js/covoiturage.js"),
  new Route("/signin", "Connexion", "/pages/auth/signin.html",["disconnected"],"/js/auth/signin.js",),
  new Route("/signup", "Inscription", "/pages/auth/signup.php",["disconnected"],"/js/auth/signup.js"),
  new Route("/compte", "Mon compte", "/pages/auth/compte.html",["utilisateur","admin"]),
  new Route("/historique", "historique de navigation", "/pages/covoiturage/historique.php",["utilisateur","admin"]),
  new Route("/password", "Réinitialiser mot de passe", "/pages/auth/password.html",["utilisateur","admin","employé"]),
  new Route("/contact", "Contact", "/pages/contact.html",[]),
  new Route("/rgpd", "Mentions légales", "/pages/rgpd.html",[]),
  new Route("/resultats", "resulats de recherche", "/pages/covoiturage/resultats.html",[],"/js/resultats.js"),
  new Route("/fiche", "fiche détailée", "/pages/covoiturage/fiche.html",[]),
  new Route("/admin", "admin", "/pages/covoiturage/admin.php",["admin"]),
];


export const websiteName = "EcoRide";
