// simulation de trajet//
const trajets = [
    {
      id: 1,
      pseudo: "JeanEco",
      note: 4.8,
      places: 2,
      prix: 10,
      date: "20-06-2025",
      heureDepart: "08:00",
      heureArrivee: "09:30",
      duree: 90,
      estEcologique: true,
      photo: "assets/user1.jpg"
    },
    {
      id: 2,
      pseudo: "JulieDiesel",
      note: 3.9,
      places: 1,
      prix: 15,
      date: "2025-06-20",
      heureDepart: "10:00",
      heureArrivee: "12:00",
      duree: 120,
      estEcologique: false,
      photo: "assets/user2.jpg"
    },
];

const resultats = document.getElementById("resultats");
const fromFiltre = document.getElementById("form-filtres");

function afficherTrajets(trajets) {
  resultats.innerHTML = "";
  if (trajets.length === 0) {
    resultats.innerHTML = `<div class="alert alert-warning">Aucun trajet trouvé.</div>`;
    return;
  }

  const template = document.getElementById("template-trajet");

  trajets.forEach(ride => {
    if (ride.places <= 0) return;

    const clone = template.content.cloneNode(true);

    clone.querySelector("img").src = ride.photo;
    clone.querySelector(".pseudo").textContent = ride.pseudo;
    clone.querySelector(".note").textContent = `⭐ ${ride.note}`;
    clone.querySelector(".places").textContent = ride.places;
    clone.querySelector(".prix").textContent = ride.prix;
    clone.querySelector(".date").textContent = ride.date;
    clone.querySelector(".depart").textContent = ride.heureDepart;
    clone.querySelector(".arrivee").textContent = ride.heureArrivee;
    clone.querySelector(".eco").textContent = ride.estEcologique ? "Écologique ✅" : "Non écologique ❌";
    clone.querySelector(".lien-detail").href = `detail.html?id=${ride.id}`;

    resultats.appendChild(clone);
  });
}
