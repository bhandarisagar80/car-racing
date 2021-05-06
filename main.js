canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=100;
car1_height=160;
car1_image="car1.png";
car1_x=10;
car1_y=10;

background_image="racing.jpg";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
window.addEventListener("keydown", my_keydown);


function my_keydown(e)
{
    keyPreesed=e.keyCode;
    console.log(keyPreesed);
      if (keyPreesed =='38')
      {
          car1_up();
          console.log("up arrow key");
      }
      if (keyPreesed =='40')
      {
          car1_down();
          console.log("down arrow key");
      }
      if (keyPreesed =='37')
      {
          car1_left();
          console.log("left arrow key");
      }
      if (keyPreesed =='39')
      {
          car1_right();
          console.log("right arrow key");
      }
}

function car1_up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("When up Arrow is x="+car1_x+",Y="+car1_y);
        uploadbackground();
        uploadcar1();
    }
}

function car1_down(){
    if(car1_y<=600){
        car1_y=car1_y+10;
        console.log("When up Arrow is x="+car1_x+",Y="+car1_y);
        uploadbackground();
        uploadcar1();
    }
}

function car1_left(){
    if(car1_y>0){
        car1_x=car1_x-10;
        console.log("When up Arrow is x="+car1_x+",Y="+car1_y);
        uploadbackground();
        uploadcar1();
    }
}

function car1_right(){
    if(car1_x<=800){
        car1_x=car1_x+10;
        console.log("When up Arrow is x="+car1_x+",Y="+car1_y);
        uploadbackground();
        uploadcar1();
    }
}