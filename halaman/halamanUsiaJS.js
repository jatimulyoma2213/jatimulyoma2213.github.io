//Usia Penduduk//

const ctx = document.getElementById('dataUsia').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['0 sampai < 1 Tahun', '1 sampai < 6 Tahun', '6 sampai < 12 Tahun', '12 sampai < 20 Tahun', '20 sampai < 45 Tahun', '> 45 Tahun'],
        datasets: [{
            label: 'Jumlah',
            data: [174, 1047, 2379, 2676, 6477, 2863],
            backgroundColor: 'rgba(255, 99, 132, 0.7)'
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