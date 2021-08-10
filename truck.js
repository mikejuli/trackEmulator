console.log('14');

  var positionY = 350;
  var positionX = 200;
  var rotate = 0;
  var tempRotate =0 ;


document.addEventListener ( 'keydown', function (event){

  if(event.key === 'a' || event.key === 'ArrowLeft'){
    console.log(event.key);
    rotate-=3;
    document.getElementById('wheel-front-left').style.transform = 'rotate('+rotate+'deg)';
    document.getElementById('wheel-front-right').style.transform = 'rotate('+rotate+'deg)';

  }

  if(event.key === 'd'|| event.key === 'ArrowRight'){
    console.log(event.key);
    rotate+=3;
    document.getElementById('wheel-front-left').style.transform = 'rotate('+rotate+'deg)';
    document.getElementById('wheel-front-right').style.transform = 'rotate('+rotate+'deg)';
  }

  if(event.key === 'w'|| event.key === 'ArrowUp'){


    // count = 0;
    // var it = setInterval(()=>{


    //       if(count === 1000){

    //         clearInterval(it);
    //         count++;
    //       }






      tempRotate+=rotate;

    positionY= positionY - (10 * Math.cos((tempRotate) * Math.PI/180));
    positionX= positionX + (10 * Math.sin((tempRotate) * Math.PI/180));

    console.log(event.key, tempRotate);
    console.log( Math.sin(tempRotate * Math.PI/180));
    console.log(positionY,positionX);

    if(rotate!== 0 ){
      document.getElementById('truck').style.transform = 'rotate('+ tempRotate+'deg)';
    }


    document.getElementById('truck').style.marginLeft =  positionX + 'px';
    document.getElementById('truck').style.marginTop =  positionY + 'px';


      // }, 50);



      }


  if(event.key === 's'|| event.key === 'ArrowDown'){

    tempRotate+=rotate;

    console.log(event.key);

    positionY= positionY + (15 * Math.cos((tempRotate) * Math.PI/180));
    positionX= positionX + (15 * Math.sin((tempRotate) * Math.PI/180));

    console.log(positionY, positionX);
    console.log(15* Math.cos((tempRotate) * Math.PI/180),15* Math.sin((tempRotate) * Math.PI/180));

    if(rotate!== 0 ){
      document.getElementById('truck').style.transform = 'rotate('+ (-tempRotate)+'deg)';
    }

    document.getElementById('truck').style.marginLeft =  positionX + 'px';
    document.getElementById('truck').style.marginTop =  positionY + 'px';
  }

})