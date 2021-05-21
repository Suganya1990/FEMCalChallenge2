//To get Slider Value
function getThemeVal() {
  setTheme(3)
}

var slider = document.getElementById('sliderValue')
var value = slider.value
slider.oninput = function () {
  value = this.value
  setTheme(value)
}

function setTheme(val) {
  if (value == 1) {
    document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
    document.querySelector('.calculator__header').style.color = 'white'
    document.querySelector('.theme__title ').style.color = 'white'
    document.querySelector('.slider').style.background = 'hsl(223, 31%, 20%)'
    document.getElementsByClassName('screen')[0].style.background =
      'hsl(224, 36%, 15%)'
    document.getElementsByClassName('button__container')[0].style.background =
      'hsl(224, 36%, 15%)'

    knob = document.querySelector('.slider')
    knob.classList.add('theme1')
    console.log(knob)
    var button = document.querySelectorAll('.btn')

    for (i = 0; i < button.length; i++) {
      button[i].style.boxShadow = '0 5px hsl(28, 16%, 65%)'
      button[i].style.backgroundColor = '#hsl(30, 25%, 89%)'
      button[i].style.color = 'hsl(221, 14%, 31%)'
    }

    document.querySelector('.btn__del').style.backgroundColor =
      'hsl(225, 21%, 49%)'
    document.querySelector('.btn__del').style.boxShadow =
      '0 5px hsl(224, 28%, 35%)'
    document.querySelector('.btn__del').style.color = 'white'
    document.querySelector('.btn__reset').style.backgroundColor =
      'hsl(225, 21%, 49%)'
    document.querySelector('.btn__reset').style.boxShadow =
      '0 5px hsl(224, 28%, 35%)'
    document.querySelector('.btn__reset').style.color = 'white'
    document.querySelector('.btn__equal').style.backgroundColor =
      ' hsl(6, 63%, 50%)'
    document.querySelector('.btn__equal').style.boxShadow =
      ' 0 5px hsl(6, 70%, 34%)'
  } else if (value == 2) {
    document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
    document.querySelector('.calculator__header').style.color = '#2D2D25'
    document.querySelector('.theme__title ').style.color = '#2D2D25'
    document.querySelector('.slide__options').style.color = 'hsl(60, 10%, 19%)'
    document.querySelector('.slider').style.background = 'hsl(0, 5%, 81%)'
    document.querySelector('.screen').style.background = 'hsl(0, 0%, 93%)'
    document.querySelector('.button__container').style.background =
      'hsl(0, 5%, 81%)'

    knob = document.querySelector('.slider')
    knob.classList.add('theme2')
    console.log(knob)
    var button = document.querySelectorAll('.btn')

    for (i = 0; i < button.length; i++) {
      button[i].style.boxShadow = '0 5px  hsl(35, 11%, 61%)'
      button[i].style.backgroundColor = 'hsl(45, 7%, 89%)'
      button[i].style.color = 'hsl(60, 10%, 19%)'
    }

    document.querySelector('.btn__del').style.backgroundColor =
      'hsl(185, 42%, 37%)'
    document.querySelector('.btn__del').style.boxShadow =
      '0 5px hsl(185, 58%, 25%)'
    document.querySelector('.btn__del').style.color = 'white'
    document.querySelector('.btn__reset').style.backgroundColor =
      'hsl(185, 42%, 37%)'
    document.querySelector('.btn__reset').style.boxShadow =
      '0 5px hsl(185, 58%, 25%)'
    document.querySelector('.btn__reset').style.color = 'white'
    document.querySelector('.btn__equal').style.backgroundColor =
      'hsl(25, 98%, 40%)'
    document.querySelector('.btn__equal').style.boxShadow =
      ' 0 5px hsl(25, 99%, 27%)'
  } else if (value == 3) {
    document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
    document.querySelector('.calculator__header').style.color =
      'hsl(52, 100%, 62%)'
    document.querySelector('.theme__title ').style.color = 'hsl(52, 100%, 62%)'
    document.querySelector('.slide__options').style.color = 'hsl(52, 100%, 62%)'
    document.querySelector('.slider').style.background = 'hsl(268, 71%, 12%)'
    document.querySelector('.screen').style.background = 'hsl(268, 71%, 12%)'
    document.querySelector('.button__container').style.background =
      'hsl(268, 71%, 12%)'

    knob = document.querySelector('.slider')
    knob.classList.add('theme3')
    console.log(knob)
    var button = document.querySelectorAll('.btn')

    for (i = 0; i < button.length; i++) {
      button[i].style.boxShadow = '0 5px hsl(290, 70%, 36%)'
      button[i].style.backgroundColor = 'hsl(268, 47%, 21%)'
      button[i].style.color = 'hsl(52, 100%, 62%)'
    }

    document.querySelector('.btn__del').style.backgroundColor =
      'hsl(281, 89%, 26%)'
    document.querySelector('.btn__del').style.boxShadow =
      '0 5px  hsl(285, 91%, 52%)'
    document.querySelector('.btn__del').style.color = 'white'
    document.querySelector('.btn__reset').style.backgroundColor =
      'hsl(281, 89%, 26%)'
    document.querySelector('.btn__reset').style.boxShadow =
      '0 5px  hsl(285, 91%, 52%)'
    document.querySelector('.btn__reset').style.color = 'white'
    document.querySelector('.btn__equal').style.backgroundColor =
      'hsl(176, 100%, 44%)'
    document.querySelector('.btn__equal').style.boxShadow =
      ' 0 5px hsl(177, 92%, 70%)'
    document.querySelector('.btn__equal').style.color = 'hsl(198, 20%, 13%)'
  }
}
