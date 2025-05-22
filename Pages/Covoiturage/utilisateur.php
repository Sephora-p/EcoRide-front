<form method="POST">
  <label><input type="checkbox" name="roles[]" value="passager"> Passager</label><br>
  <label><input type="checkbox" name="roles[]" value="chauffeur"> Chauffeur</label><br>
  <button type="submit">Valider mes rôles</button>
</form>

<form method="POST" action="ajouter_vehicule.php">
  <label>Plaque :</label>
  <input type="text" name="plaque" required>

  <label>Date immatriculation :</label>
  <input type="date" name="date_immatriculation" required>

  <label>Marque :</label>
  <input type="text" name="marque" required>

  <label>Modèle :</label>
  <input type="text" name="modele" required>

  <label>Couleur :</label>
  <input type="text" name="couleur" required>

  <label>Énergie :</label>
  <select name="energie">
    <option value="Électrique">Électrique</option>
    <option value="Essence">Essence</option>
    <option value="Diesel">Diesel</option>
  </select>

  <label>Nombre de places :</label>
  <input type="number" name="places" required min="1" max="6">

  <label>Préférences :</label><br>
  <input type="checkbox" name="preferences[]" value="1"> Non-fumeur<br>
  <input type="checkbox" name="preferences[]" value="2"> Pas d’animaux<br>
  <input type="checkbox" name="preferences[]" value="3"> Musique autorisée<br>

  <button type="submit">Enregistrer le véhicule</button>
</form>
