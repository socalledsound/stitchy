var gridHeight = 400;
var gridWidth = 400;
var cellSize = 30;
var columnWidth=100;
var xStart = 0;
var yStart = 0;
var ready = false;
var counter1 = 0;
var counter2 = 0;

var img1,img2,img3,img4;
var images=[];
var currentImage;


function preload() {
    img1=loadImage("images/bear.jpg");
    img2=loadImage("images/ocelot.jpg");
    img3=loadImage("images/toucan.jpg");
    img4=loadImage("images/download.png");
}


function setup() {
    createCanvas(2000,1200);
    background(100);

    images=[img1,img2,img3,img4];
    currentImage = img1;
    
    images.forEach((image)=>{
        image.loadPixels();
    });

    for (var x=0;x<gridWidth;x++) {

    counter1 = counter1 +1;

    if (counter1 < columnWidth) {
      counter1 = counter1+1;
    }
    else {
    changeImage();
    counter1=0;
    }

    for(var y=0;y<gridHeight;y++) {        
        var pixelColor;      
        var index = (x + y * img1.width)*4;

                
        counter2 = counter2 + 1;
        
        if (counter2 < columnWidth) {
              counter2 = counter2+1;
            }
            else {
            changeImage();
            counter2=0;
            }
        
        if(ready) {
            var imgName = imagePicker(images);
            currentImage = imgName;
            pixelColor = pixelPicker(imgName,index)
            fill(pixelColor);
            
            }
        else {
                pixelColor = [currentImage.pixels[index],
                              currentImage.pixels[index+1],
                              currentImage.pixels[index+2]
                              ];
                fill(pixelColor);
            }
        noStroke();
        rect(x*cellSize+xStart,y*cellSize+yStart,cellSize,cellSize);

        }
    }
 for (var x=0;x<gridWidth;x++) {

    counter1 = counter1 +1;

    if (counter1 < columnWidth) {
      counter1 = counter1+1;
    }
    else {
    changeImage();
    counter1=0;
    }

    for(var y=0;y<gridHeight;y++) {        
        var pixelColor;      
        var index = (x + y * img1.width)*4;

                
        counter2 = counter2 + 1;
        
        if (counter2 < columnWidth) {
              counter2 = counter2+1;
            }
            else {
            changeImage();
            counter2=0;
            }
        
        if(ready) {
            var imgName = imagePicker(images);
            currentImage = imgName;
            pixelColor = pixelPicker(imgName,index)
            fill(pixelColor);
            
            }
        else {
                pixelColor = [currentImage.pixels[index],
                              currentImage.pixels[index+1],
                              currentImage.pixels[index+2]
                              ];
                fill(pixelColor);
            }
        noStroke();
        rect(x*cellSize+xStart,y*cellSize+yStart,cellSize,cellSize);

        }
    }

}

//function draw() {
//    
//columnWidth = random(100);    
//
//
//}

function changeImage() {
if (!ready) {
    ready = true;
//    console.log('ready: '+ ready);console.log('ready: '+ ready);
}
else {
    columnWidth = random(10);
    ready = false;
//    console.log('ready: '+ ready);
}

}

function imagePicker(array) {
    var randomIndex = int(random(array.length));
    var value = array[randomIndex];
    console.log(randomIndex);
    return value
}

function pixelPicker(imgName,index) {
    var color = [imgName.pixels[index],
                              imgName.pixels[index+1],
                              imgName.pixels[index+2]
                              ];
    return color
                
    
}