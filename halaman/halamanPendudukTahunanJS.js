//Penduduk Tahunan//

let labelPendudukTahunan = ['2017', '2018', '2019', '2020'];
let inputPendudukTahunan = {
    labels: labelPendudukTahunan,
    datasets: [{
      label: 'Jumlah Penduduk',
      backgroundColor: 'rgba(16, 47, 80, .7)',
      borderColor: 'red',
      data: [17158, 17230, 17521, 20603],
    }]
};
let dataPendudukTahunan = document.getElementById('dataPendudukTahunan');
let myChart = new Chart(dataPendudukTahunan, {
    type: 'line',
    data: inputPendudukTahunan,
    option: {}
});