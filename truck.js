console.log('14');
document.addEventListener ( 'keydown', function (event){

  if(event.key === 'a' || event.key === 'ArrowLeft'){
    console.log(event.key);
    document.getElementById('wheel-front-left').style.transform = 'rotate(-25deg)';
    document.getElementById('wheel-front-right').style.transform = 'rotate(-25deg)';

  }

  if(event.key === 'd'|| event.key === 'ArrowRight'){
    console.log(event.key);
    document.getElementById('wheel-front-left').style.transform = 'rotate(25deg)';
    document.getElementById('wheel-front-right').style.transform = 'rotate(25deg)';
  }

})