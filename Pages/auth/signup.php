<?php
session_start();
$erreur = '';
$succes = '';
?>

<div class="hero-scene text-center text-white">
    <div class="hero-scene-content">
        <h1>Inscription</h1>
    </div>
</div>
<?php



if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $pseudo = trim($_POST['pseudo'] ?? '');
  $email = trim($_POST['email'] ?? '');
  $motdepasse = $_POST['motdepasse'] ?? '';

  // Validation de base
  if (!$pseudo || !$email || !$motdepasse) {
    $erreur = "Tous les champs sont requis.";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $erreur = "Adresse email invalide.";
  } elseif (strlen($motdepasse) < 8) {
    $erreur = "Le mot de passe doit contenir au moins 8 caractères.";
  } else {
    try {
      $pdo = new PDO('mysql:host=localhost;dbname=ecoride', 'root', '');
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      // Vérifier doublon email
      $verif = $pdo->prepare("SELECT id FROM utilisateurs WHERE email = ?");
      $verif->execute([$email]);
      if ($verif->fetch()) {
        $erreur = "Cet email est déjà utilisé.";
      } else {
        $hash = password_hash($motdepasse, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("INSERT INTO utilisateurs (pseudo, email, mot_de_passe, credits) VALUES (?, ?, ?, 20)");
        $stmt->execute([$pseudo, $email, $hash]);

        $succes = "Compte créé avec succès ! Vous avez reçu 20 crédits.";
      }

    } catch (PDOException $e) {
      $erreur = "Erreur de base de données : " . $e->getMessage();
    }
  }
}
?>

<div class="container my-5">
  <h2 class="text-success mb-4">Créer un compte</h2>

  <?php if ($erreur): ?>
    <div class="alert alert-danger"><?= htmlspecialchars($erreur) ?></div>
  <?php endif; ?>

  <?php if ($succes): ?>
    <div class="alert alert-success"><?= htmlspecialchars($succes) ?></div>
  <?php endif; ?>

  <form method="POST" class="row g-3">
    <div class="col-md-6">
      <label for="pseudo" class="form-label">Pseudo</label>
      <input type="text" name="pseudo" id="pseudo" class="form-control" required>
      <div class="invalid-feedback" >
         Pseudo requis
      </div> 
    </div>

    <div class="col-md-6">
      <label for="email" class="form-label">Adresse email</label>
      <input type="email" name="email" id="email" class="form-control" required>
        <div class="invalid-feedback" >
                Le mail est incorrect
            </div>
    </div>

    <div class="col-md-6">
      <label for="motdepasse" class="form-label">Mot de passe</label>
      <input type="password" name="motdepasse" id="motdepasse" class="form-control" required minlength="8">
      <div class="invalid-feedback">
        Mot de passe pas assez robuste : Il doit comprendre minimum 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial
      </div>
      <div class="valid-feedback">
        Mot de passe robuste
      </div>
    </div>

    <div class="col-md-6">
      <label for="ValidatePasswordInput" class="form-label">Confirmer votre mot de passe</label>
      <input type="password" class="form-control" id="ValidatePasswordInput" name="PasswordConfirm">
      <div class="invalid-feedback" >
        Mot de passe différent   
       </div> 
    </div>

    <div class="col-12">
      <button type="submit" class="btn btn-success">Créer mon compte</button>
    </div>
  </form>
</div>
