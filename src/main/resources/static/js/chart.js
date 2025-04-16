document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('userChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Entrada', 'Saída', 'Estoque'],
            datasets: [{
                label: 'Quantidade',
                data: [129, 150, 44],
                backgroundColor: ['#007bff', '#dc3545', '#ffc107'],
                borderColor: ['#0056b3', '#a71d2a', '#d39e00'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

