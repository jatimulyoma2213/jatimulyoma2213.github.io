//Kepadatan Penduduk//

let labelKepadatan = ['2017', '2018', '2019', '2020'];
let inputKepadatan = {
    labels: labelKepadatan,
    datasets: [{
      label: 'Penduduk',
      backgroundColor: 'rgba(16, 47, 80, .7)',
      borderColor: 'red',
      data: [1620.21, 37650, 1654, 1946],
    }]
};
let dataKepadatan = document.getElementById('dataKepadatanPenduduk');
let myChart = new Chart(dataKepadatan, {
    type: 'line',
    data: inputKepadatan,
    option: {}
});