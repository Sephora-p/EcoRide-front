const labelsCovoiturages = json_encode(array_column($data_covoiturages, 'date')) ;
const dataCovoiturages =  json_encode(array_column($data_covoiturages, 'nombre_covoiturages'));
const labelsCredits =  json_encode(array_column($data_credits, 'date')) ;
const dataCredits = json_encode(array_column($data_credits, 'credits_gagnes'));

new Chart(document.getElementById('chartCovoiturages'), {
    type: 'line',
    data: {
        labels: labelsCovoiturages,
        datasets: [{
            label: 'Covoiturages par jour',
            data: dataCovoiturages,
            borderColor: 'green',
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

new Chart(document.getElementById('chartCredits'), {
    type: 'bar',
    data: {
        labels: labelsCredits,
        datasets: [{
            label: 'Crédits gagnés',
            data: dataCredits,
            backgroundColor: 'lightgreen',
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});