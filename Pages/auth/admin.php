<cript?php
session_start();
require 'db.php'; // Connexion PDO

if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header('Location: login.php');
    exit;
}

// Création employé
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['new_employee'])) {
    $stmt = $pdo->prepare("INSERT INTO utilisateurs (pseudo, email, password, role) VALUES (?, ?, ?, 'employe')");
    $stmt->execute([
        $_POST['pseudo'],
        $_POST['email'],
        password_hash($_POST['password'], PASSWORD_DEFAULT)
    ]);
    $message = "Employé créé avec succès.";
}

// Suspension
if (isset($_GET['suspend'])) {
    $stmt = $pdo->prepare("UPDATE utilisateurs SET actif = 0 WHERE id = ?");
    $stmt->execute([(int)$_GET['suspend']]);
    $message = "Compte suspendu.";
}

// Requêtes
$users = $pdo->query("SELECT id, pseudo, email, role, actif FROM utilisateurs")->fetchAll();
$data_covoiturages = $pdo->query("SELECT date, nombre_covoiturages FROM logs_stats ORDER BY date ASC")->fetchAll(PDO::FETCH_ASSOC);
$data_credits = $pdo->query("SELECT date, credits_gagnes FROM credits_platforme ORDER BY date ASC")->fetchAll(PDO::FETCH_ASSOC);
$total_credits = $pdo->query("SELECT SUM(credits_gagnes) FROM credits_platforme")->fetchColumn();
?>


<div class="container py-4">
        <h1 class="mb-4 text-center">🌱 Espace Administrateur - EcoRide</h1>

        <?php if (isset($message)) : ?>
            <div class="alert alert-success"><?= htmlspecialchars($message) ?></div>
        <?php endif; ?>

        <!-- Création d'employé -->
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <h4>👤 Créer un employé</h4>
                <form method="post" class="row g-3">
                    <input type="hidden" name="new_employee" value="1">
                    <div class="col-md-4 col-12">
                        <input type="text" name="pseudo" class="form-control" placeholder="Pseudo" required>
                    </div>
                    <div class="col-md-4 col-12">
                        <input type="email" name="email" class="form-control" placeholder="Email" required>
                    </div>
                    <div class="col-md-4 col-12">
                        <input type="password" name="password" class="form-control" placeholder="Mot de passe" required>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-success w-100">Créer</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Liste utilisateurs -->
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <h4>👥 Comptes</h4>
                <div class="table-responsive">
                    <table class="table table-striped table-bordered">
                        <thead class="table-dark">
                            <tr>
                                <th>Pseudo</th>
                                <th>Email</th>
                                <th>Rôle</th>
                                <th>Actif</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($users as $u): ?>
                                <tr>
                                    <td><?= htmlspecialchars($u['pseudo']) ?></td>
                                    <td><?= htmlspecialchars($u['email']) ?></td>
                                    <td><?= $u['role'] ?></td>
                                    <td><?= $u['actif'] ? '✅' : '❌' ?></td>
                                    <td>
                                        <?php if ($u['actif'] && $u['role'] !== 'admin'): ?>
                                            <a href="?suspend=<?= $u['id'] ?>" class="btn btn-sm btn-outline-danger">Suspendre</a>
                                        <?php else: ?>
                                            <span class="text-muted">-</span>
                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Statistiques -->
        <div class="card shadow-sm">
            <div class="card-body">
                <h4>📈 Statistiques</h4>
                <p><strong>Crédits totaux gagnés :</strong> <?= $total_credits ?> 💳</p>

                <div class="row">
                    <div class="col-md-6 col-12 mb-3">
                        <canvas id="chartCovoiturages"></canvas>
                    </div>
                    <div class="col-md-6 col-12 mb-3">
                        <canvas id="chartCredits"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>



