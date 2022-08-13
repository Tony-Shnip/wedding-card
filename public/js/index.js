if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1		
  var dpt = window.devicePixelRatio;
  var widthM = window.screen.width * dpt;
  var widthH = window.screen.height * dpt;
  document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');

  let images = [];
  images[0] = document.getElementById('1');
  images[1] = document.getElementById('2');
  images[2] = document.getElementById('3');
  let mobileImg4 = document.getElementById('mobile_4');
  let mobileImg5 = document.getElementById('mobile_5');

  if (window.screen.width < 600) {
    mobileImg4.style.display = 'inline';
    mobileImg5.style.display = 'inline';

    images[0].setAttribute('src', './images/1_mobile.png');
    images[1].setAttribute('src', './images/2_mobile.png');
    images[2].setAttribute('src', './images/3_mobile.png');
  }
}