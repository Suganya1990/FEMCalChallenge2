var slider = document.getElementById('sliderValue')
var value = slider.value

slider.oninput = function () {
  value = this.value
  setTheme(value)
}

function setTheme(val) {
  var button = document.querySelectorAll('.btn')
  if (value == 1) {
    document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
    document.querySelector('.calculator__header').style.color = 'white'
    document.querySelector('.theme__title ').style.color = 'white'
    document.querySelector('.slider').style.background = '#232C43'
    document.getElementsByClassName('screen')[0].style.background = '#182034'
    document.getElementsByClassName('button__container')[0].style.background =
      '#182034'

    knob = document.querySelector('.slider')
    knob.classList.add('theme1')
    knob.classList.remove('theme2', 'theme3')

    for (i = 0; i < button.length; i++) {
      button[i].style.boxShadow = '0 5px	#B4A597'
      button[i].style.backgroundColor = '#EAE3DC'
      button[i].style.color = '#444B5A'
    }

    document.querySelector('.btn__del').style.backgroundColor = '#637097'
    document.querySelector('.btn__del').style.boxShadow = '0 5px #404E72'
    document.querySelector('.btn__del').style.color = 'white'
    document.querySelector('.btn__reset').style.backgroundColor = '#637097'
    document.querySelector('.btn__reset').style.boxShadow = '0 5px #404E72'
    document.querySelector('.btn__reset').style.color = 'white'
    document.querySelector('.btn__equal').style.backgroundColor = '#D03F2F'
    document.querySelector('.btn__equal').style.boxShadow = ' 0 5px #93261A'
    val = ''
  } else if (value == 2) {
    document.body.style.backgroundColor = '#E6E6E6'
    document.querySelector('.calculator__header').style.color = '#2D2D25'
    document.querySelector('.theme__title ').style.color = '#2D2D25'
    document.querySelector('.slide__options').style.color = '#35352C'
    document.querySelector('.slider').style.background = '#D1CCCC'
    document.querySelector('.screen').style.background = '#EDEDED'
    document.querySelector('.button__container').style.background = '#D1CCCC'

    knob = document.querySelector('.slider')
    knob.classList.add('theme2')
    knob.classList.remove('theme1', 'theme3')

    for (i = 0; i < button.length; i++) {
      button[i].style.boxShadow = '0 5px  #A69D91'
      button[i].style.backgroundColor = '#E5E4E1'
      button[i].style.color = '#35352C'
    }

    document.querySelector('.btn__del').style.backgroundColor = '#377F86'
    document.querySelector('.btn__del').style.boxShadow = '0 5px #1B5F65'
    document.querySelector('.btn__del').style.color = 'white'
    document.querySelector('.btn__reset').style.backgroundColor = '#377F86'
    document.querySelector('.btn__reset').style.boxShadow = '0 5px #1B5F65 '
    document.querySelector('.btn__reset').style.color = 'white'
    document.querySelector('.btn__equal').style.backgroundColor = '#CA5502'
    document.querySelector('.btn__equal').style.boxShadow = ' 0 5px #893901'
    val = ''
  } else if (value == 3) {
    document.body.style.backgroundColor = '#160628'
    document.querySelector('.calculator__header').style.color = '#FFE53D'
    document.querySelector('.theme__title ').style.color = '#FFE53D'
    document.querySelector('.slide__options').style.color = '#FFE53D'
    document.querySelector('.slider').style.background = '#1D0934'
    document.querySelector('.screen').style.background = '#1D0934'
    document.querySelector('.button__container').style.background = '#1D0934'

    knob = document.querySelector('.slider')
    knob.classList.add('theme3')

    for (i = 0; i < button.length; i++) {
      button[i].style.boxShadow = '0 5px #871C9C'
      button[i].style.backgroundColor = '#341C4F'
      button[i].style.color = '#FFE53D'
    }

    document.querySelector('.btn__del').style.backgroundColor = '#58077D'
    document.querySelector('.btn__del').style.boxShadow = '0 5px  #BC15F4'
    document.querySelector('.btn__del').style.color = 'white'
    document.querySelector('.btn__reset').style.backgroundColor = '#58077D'
    document.querySelector('.btn__reset').style.boxShadow = '0 5px  #BC15F4'
    document.querySelector('.btn__reset').style.color = 'white'
    document.querySelector('.btn__equal').style.backgroundColor = '#00E0D1'
    document.querySelector('.btn__equal').style.boxShadow = ' 0 5px #6CF9F2'
    document.querySelector('.btn__equal').style.color = '#1B2428'
    val = ''
  }
}

const calculator = document.querySelector('.calculator__container')
const keys = calculator.querySelector('.button__container')
const display = document.querySelector('.screen')

keys.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
      console.log(display.textContent)
    }
    if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operator key!')
    }
    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }

    if (action === 'clear') {
      console.log('clear key!')
    }

    if (action === 'equal') {
      console.log('equal key!')
    }
    if (action === 'delete') {
      console.log('delete key!')
    }
  }
})
