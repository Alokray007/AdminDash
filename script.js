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

    document.getElementById('add-btn').addEventListener('click', function () {
        const container = document.getElementById('add-more');
        const currentRows = container.getElementsByClassName('material-row').length;
        const nextIndex = currentRows + 1;

        // Create a DocumentFragment to hold the new elements
        const fragment = document.createDocumentFragment();

        // Create a new material row div
        const newRow = document.createElement('div');
        newRow.className = 'material-row';

        // Set the inner HTML for the new row
        newRow.innerHTML = `
            <input type="text" id="material${nextIndex}" name="material${nextIndex}" placeholder="Product ${nextIndex}">
            <input type="number" id="quantity${nextIndex}" name="quantity${nextIndex}" placeholder="QUANTITY">
            <input type="text" id="price${nextIndex}" name="price${nextIndex}" placeholder="PRICE">
        `;

        // Append the new row to the DocumentFragment
        fragment.appendChild(newRow);

        // Append the fragment to the container
        container.appendChild(fragment);
    });

    const form = document.getElementById('request-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
    });
