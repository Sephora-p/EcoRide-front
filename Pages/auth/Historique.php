<?php
session_start();
require 'db.php'; // Connexion PDO

$id_utilisateur = $_SESSION['user_id'];

// Historique passager
$stmt_passager = $pdo->prepare("
    SELECT c.*, 'passager' AS role
    FROM covoiturages c
    JOIN participations p ON c.id = p.covoiturage_id
    WHERE p.passager_id = ? AND (c.statut = 'terminé' OR p.statut = 'annulé')
");
$stmt_passager->execute([$id_utilisateur]);
$historique_passager = $stmt_passager->fetchAll();

// Historique chauffeur
$stmt_chauffeur = $pdo->prepare("
    SELECT c.*, 'chauffeur' AS role
    FROM covoiturages c
    WHERE c.chauffeur_id = ? AND c.statut IN ('terminé', 'annulé')
");
$stmt_chauffeur->execute([$id_utilisateur]);
$historique_chauffeur = $stmt_chauffeur->fetchAll();

$historique = array_merge($historique_passager, $historique_chauffeur);
?>
<div class="hero-scene text-center text-white">
    <div class="hero-scene-content">
        <h1>Mon compte</h1>
    </div>
</div>

<h2>Historique de vos covoiturages</h2>
<?php foreach ($historique as $trajet): ?>
    <div>
        <strong><?= $trajet['depart'] ?> → <?= $trajet['arrivee'] ?></strong><br>
        Date : <?= $trajet['date_depart'] ?> | Rôle : <?= $trajet['role'] ?><br>
        Statut : <?= $trajet['statut'] ?><br>

        <?php if ($trajet['statut'] != 'annulé' && $trajet['statut'] != 'terminé'): ?>
            <form method="post" action="annuler_trajet.php">
                <input type="hidden" name="id_trajet" value="<?= $trajet['id'] ?>">
                <input type="hidden" name="role" value="<?= $trajet['role'] ?>">
                <button type="submit">Annuler</button>
            </form>
        <?php endif; ?>
    </div>
    <hr>
<?php endforeach; ?>



