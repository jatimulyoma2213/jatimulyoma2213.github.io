let dataPekerjaan;
let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQrMzmE8Hf49-B_9AzbHn3Sj7KYbVCW3W3IpS5lGTeu-52ESOaczqPIh5iU2usdxP4ckUxnyOhXXuqJ/pub?output=csv'
function preload() {
  dataPekerjaan = loadTable(url, 'csv', 'header');
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

    angles = dataPekerjaan.getColumn('x');
    pieChart(400, angles);

    //text
    textSize(15)
    fill('#9aabb9');
    ellipse(50, 95, 12, 12);
    text("petani                           = 2165", 70, 100);

    fill('#EF919B');
    ellipse(50, 125, 12, 12);
    text("Pekerja buruh/ pabrik   = 2067", 70, 130);
    
    ellipse(50, 155, 12, 12);
    text("pedagang                     = 587", 70, 160)
    fill('#FEC8D8');
    
    fill('#E3BFB7');
    ellipse(50, 185, 12, 12);
    text("PNS/ABRI                    = 328", 70, 190)
    
    fill('#C29BA3');
    ellipse(50, 215, 12, 12);
    text("karyawan swasta         = 682", 70, 220)
    
    fill('#CAB3C1');
    ellipse(50, 245, 12, 12);
    text("wiraswasta                   = 1546", 70, 250)
    
    fill('#EDECEB');
    ellipse(50, 275, 12, 12);
    text("pensiunan                    = 430", 70, 280)
    
    fill('#C4D4E0');
    ellipse(50, 305, 12, 12);
    text("lain-lain                        = 4227", 70, 310)
}

function pieChart(diameter, data) {
    let lastAngle = 0;
    let color  = [ '#9aabb9','#EF919B','#FEC8D8', '#E3BFB7', '#C29BA3','#CAB3C1','#EDECEB', '#C4D4E0'];
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
  