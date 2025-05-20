export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
  this.url = url;
  this.title = title;
  this.pathHtml = pathHtml;
  this.pathJS = pathJS;
  this.authorize = authorize;
}

}

/*
[] tout le monde à acces
["disconnected"] réserver aux utilisateur déconnecté
["utilisateur"] réserver aux utilisateur avec le role utilisateur
[admin] réserver aux utilisateur avec le role amdin
[employé] réserver aux utilisateur avec le role employé
*/