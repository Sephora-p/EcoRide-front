// simulation de trajet//
const trajets = [
    {
      id: 1,
      pseudo: "JeanEco",
      note: 4.8,
      places: 2,
      prix: 10,
      date: "2025-06-20",
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

