CANVAS_WIDTH = 500
CANVAS_HEIGHT = 250
NUM_ROWS = 15
NUM_COLUMNS = 30
TRIANGLE_HEIGHT = CANVAS_WIDTH/NUM_COLUMNS

function setup() {
  let canv = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(50);
 for(var i = 0;i<NUM_COLUMNS;i++){
    for(var j = 0;j<NUM_ROWS;j++){
      noStroke()
      if(j<NUM_ROWS/2){
        
        let redValue = random(10+10*j,90+50*j)
      fill(redValue,10,60)
      }
      else{
        let redValue = random(10+(NUM_ROWS-j),90+50*(NUM_ROWS-j))
      fill(redValue,10,60)
      }
      
      let point1X = i*TRIANGLE_HEIGHT
      let point1Y = j*TRIANGLE_HEIGHT
      let point2X = (i+1)*TRIANGLE_HEIGHT
      let point2Y = j*TRIANGLE_HEIGHT
      let point3X = i*TRIANGLE_HEIGHT
      let point3Y = (j+1)*TRIANGLE_HEIGHT
      let point4X = (i+1)*TRIANGLE_HEIGHT
      let point4Y = (j+1)*TRIANGLE_HEIGHT
      triangle(point1X,point1Y,point2X,point2Y,point3X,point3Y)

      if(j<NUM_ROWS/2){
        
      let redValue = random(10+10*j,90+50*j)
      fill(redValue,10,60)
      }
      else{
        let redValue = random(10+10*(NUM_ROWS-j),90+50*(NUM_ROWS-j))
      fill(redValue,10,60)
      }
      
triangle(point3X,point3Y,point2X,point2Y,point4X,point4Y)
      
    }
  } 
  
  //saveCanvas(canv,"circle_K_background","png")


}

function draw() {
     
}
