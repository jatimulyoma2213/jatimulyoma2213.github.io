//Pendidikan Penduduk//

const ctxPendidikan = document.getElementById('dataPendidikan').getContext('2d');
const myChart = new Chart(ctxPendidikan, {
    type: 'bar',
    data: {
        labels: ['Tidak Pernah Sekolah', 'Belum Sekolah', 'Tidak/Belum Tamat SD', 'Tamat SD', 'Tamat SMP', 'Tamat SMA', 'Tamat Perguruan Tinggi'],
        datasets: [{
            label: 'Jumlah',
            data: [571, 1907, 1557, 5186, 3126, 3139, 888],
            backgroundColor: 'rgba(0, 0, 0, .5)'
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