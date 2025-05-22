// Appelle PHP pour récupérer les covoiturages
        function loadRides() {
            axios.get('rides_history.php')
                .then(response => {
                    const rides = response.data;
                    let html = '<table class="table table-striped"><thead><tr><th>Date</th><th>Rôle</th><th>Places disponibles</th><th>Actions</th></tr></thead><tbody>';
                    rides.forEach(ride => {
                        html += `<tr>
                            <td>${new Date(ride.date).toLocaleString()}</td>
                            <td>${ride.role}</td>
                            <td>${ride.available_seats}</td>
                            <td>
                                <button class="btn btn-danger btn-sm" onclick="cancelRide(${ride.id})">Annuler</button>
                            </td>
                        </tr>`;
                    });
                    html += '</tbody></table>';
                    document.getElementById('ridesList').innerHTML = html;
                });
        }

        function cancelRide(rideId) {
            if(confirm("Voulez-vous vraiment annuler ce covoiturage ?")) {
                axios.post('cancel_ride.php', { ride_id: rideId })
                    .then(response => {
                        alert(response.data.message);
                        loadRides();
                    });
            }
        }

        loadRides();