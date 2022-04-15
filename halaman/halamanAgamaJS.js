//Data Agama//

const ctxAgama = document.getElementById('dataAgama').getContext('2d');
const chartAgama = new Chart(ctxAgama, {
    type: 'bar',
    data: {
        labels: ['Islam', 'Protestan', 'Katholik', 'Hindu', 'Budha'],
        datasets: [{
            label: 'Jumlah',
            data: [15189, 50, 413, 0, 16],
            backgroundColor: 'rgba(51, 255, 51, .7)',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});