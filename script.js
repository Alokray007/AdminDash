document.addEventListener("DOMContentLoaded", function() {
    // User Growth Chart
    const ctx1 = document.getElementById('userGrowthChart').getContext('2d');
    const userGrowthChart = new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Users',
                data: [50, 100, 150, 200, 250, 300],
                borderColor: '#3498db',
                fill: false
            }]
        }
    });

    // Sales Report Chart
    const ctx2 = document.getElementById('salesReportChart').getContext('2d');
    const salesReportChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [2000, 2500, 3000, 3500, 4000, 4500],
                backgroundColor: '#2ecc71'
            }]
        }
    });


});

const btn = document.getElementById('sub-btn');
    btn.addEventListener('click', function() {
        alert("Request successfully sent");
        window.location.reload();
    });
