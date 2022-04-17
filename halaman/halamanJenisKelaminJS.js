//Jenis Kelamin//

const ctxL = document.getElementById('dataJenisKelaminLaki').getContext('2d');
const ctxP = document.getElementById('dataJenisKelaminPerempuan').getContext('2d');

const myChartL = new Chart(ctxL, {
    type: 'bar',
    data: {
        labels: ['0 sampai < 1 Tahun', '1 sampai < 6 Tahun', '6 sampai < 12 Tahun', '12 sampai < 20 Tahun', '20 sampai < 45 Tahun', '> 45 Tahun'],
        datasets: [{
            label: 'Laki-laki',
            data: [87, 570, 1332, 1340, 3295, 1410],
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
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

const myChartP = new Chart(ctxP, {
    type: 'bar',
    data: {
        labels: ['0 sampai < 1 Tahun', '1 sampai < 6 Tahun', '6 sampai < 12 Tahun', '12 sampai < 20 Tahun', '20 sampai < 45 Tahun', '> 45 Tahun'],
        datasets: [{
            label: 'Perempuan',
            data: [87, 477, 1047, 1336, 3182, 1453],
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
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
