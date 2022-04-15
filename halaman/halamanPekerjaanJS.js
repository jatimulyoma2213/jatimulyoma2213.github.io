//Pekerjaan Penduduk//

let labelPekerjaan = ['Petani', 'Pekerja Buruh/Pabrik', 'pedagang', 'PNS/ABRI', 'Karyawan Swasta', 'Wiraswasta', 'Pensiunan', 'Lain-lain'];
let inputPekerjaan = {
    labels: labelPekerjaan,
    datasets: [{
      label: 'Jumlah',
      backgroundColor: ['rgba(255, 51, 51, .7)', 'rgba(255, 153, 51, .7)', 'rgba(255, 255, 51, .7)', 'rgba(153, 255, 51, .7)',
      'rgba(51, 255, 51, .7)', 'rgba(51, 255, 153, .7)', 'rgba(51, 255, 255, .7)', 'rgba(51, 153, 255, .7)'],
      borderColor: 'black',
      data: [2165, 2067, 597, 328, 682, 1546, 430, 4227],
    }]
};
let dataPekerjaan = document.getElementById('dataPekerjaan');
let myChart = new Chart(dataPekerjaan, {
    type: 'pie',
    data: inputPekerjaan,
    option: {}
});