console.log('trunk');

  var positionYTrunk = 450;
  var positionXTrunk = 200;
  var rotateTrunk = 0;
  var tempRotateTrunk =0 ;


document.addEventListener ( 'keydown', function (event){

  if(event.key === 'a' || event.key === 'ArrowLeft'){
    console.log(event.key);
    rotateTrunk-=5;
  }

  if(event.key === 'd'|| event.key === 'ArrowRight'){
    console.log(event.key);
    rotateTrunk+=5;
     }

  if(event.key === 'w'|| event.key === 'ArrowUp'){


      tempRotateTrunk+=rotateTrunk;

    positionYTrunk= positionYTrunk - (10 * Math.cos((tempRotateTrunk) * Math.PI/180));
    positionXTrunk= positionXTrunk + (10 * Math.sin((tempRotateTrunk) * Math.PI/180));

    console.log(event.key, tempRotate);
    console.log( Math.sin(tempRotate * Math.PI/180));
    console.log(positionY,positionX);

    if(rotate!== 0 ){
      document.getElementById('trunk').style.transform = 'rotate('+ tempRotateTrunk+'deg)';
    }


    document.getElementById('trunk').style.marginLeft =  positionXTrunk + 'px';
    document.getElementById('trunk').style.marginTop =  positionYTrunk + 'px';


      // }, 50);



      }


  if(event.key === 's'|| event.key === 'ArrowDown'){

    tempRotateTrunk-=rotateTrunk;

    console.log(event.key);

    positionYTrunk= positionYTrunk + (15 * Math.cos((tempRotateTrunk) * Math.PI/180));
    positionXTrunk= positionXTrunk - (15 * Math.sin((tempRotateTrunk) * Math.PI/180));

    console.log(positionYTrunk, positionXTrunk);
    console.log(15* Math.cos((tempRotate) * Math.PI/180),15* Math.sin((tempRotate) * Math.PI/180));

    if(rotate!== 0 ){
      document.getElementById('trunk').style.transform = 'rotate('+ tempRotateTrunk+'deg)';
    }

    document.getElementById('trunk').style.marginLeft =  positionXTrunk + 'px';
    document.getElementById('trunk').style.marginTop =  positionYTrunk + 'px';
  }

})