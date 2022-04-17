let dataAgama;
let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRHu3ivQ579gDnbtXTyg9zQuHTktbY7deN9IG6dJqRFaic1bGP9Y0Vgbcf5TCPzaG58EVW5fMDo1sYu/pub?output=csv'
function preload() {
  dataAgama = loadTable(url, 'csv', 'header');
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
  angles = dataAgama.getColumn('x')

  pieChart(400, angles);
  fill('black');
  
  //text
  textSize(15)
  fill('#0000FF');
  ellipse(50, 95, 12, 12);
  text("Islam            = 15.189 orang", 70, 100);

  fill('#FF0000');
  ellipse(50, 125, 12, 12);
  text("Protestan      = 50 orang    ", 70, 130);
  
  fill('#03c03c');
  ellipse(50, 155, 12, 12);
  text("Katholik         = 413 orang   ", 70, 160)
  
  fill('#8A2BE2');
  ellipse(50, 185, 12, 12);
  text("Buddha         = 16 orang    ", 70, 190)
}

function pieChart(diameter, data) {
    let lastAngle = 0;
    let color  = ['#0000FF','#FF0000','#03c03c', '#8A2BE2'];
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