let dataKepadatanPenduduk;
let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTa5Ge__s3NnpfcS8xeO-B6A1-WAWGrap5VpY9WXS5g9Oo6xuDuK0N7NxgIaxlhcdTyfMZoTAGqxZX5/pub?output=csv'
function preload() {
  dataKepadatanPenduduk = loadTable(url, 'csv', 'header');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background('white');
  angles = dataKepadatanPenduduk.getColumn('x')

  pieChart(400, angles);
  fill('black');

  //text
  textSize(15)
  fill('#FF7F50');
  ellipse(50, 95, 12, 12);
  text("Tahun 2017       = 1620 orang/km^2", 70, 100);

  fill('#ADD8E6');
  ellipse(50, 125, 12, 12);
  text("Tahun 2018       = 3765 orang/km^2", 70, 130);
  
  fill('#FFB6C1');
  ellipse(50, 155, 12, 12);
  text("Tahun 2019       = 1654 orang/km^2", 70, 160)
  
  fill('#B0C4DE');
  ellipse(50, 185, 12, 12);
  text("Tahun 2020       = 1946 orang/km^2", 70, 190)
}


function pieChart(diameter, data) {
  let lastAngle = 0;
  let color  = ['#FF7F50','#ADD8E6','#FFB6C1', '#B0C4DE'];
  for (let i = 0; i < data.length; i++) {    
    fill(color[i]);
    arc(
      x = 3/4 * windowWidth,
      height/2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);
  }
}