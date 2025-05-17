import Route from "./Route.js";

//Définir ici vos routes

export const allRoutes = [

    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Covoiturage", "Covoiturage", "/pages/Covoiturage.html"),
    new Route("/Connexion", "Connexion", "/pages/Connexion.html"),
    new Route("/Contact", "Contact", "/pages/Contact.html"),
    ];

    //Le titre s'affiche comme ceci : Route.titre - websitename

export const websiteName = "EcoRide";