'use strict'

let buttons = document.querySelectorAll('.but');
let display = document.querySelector('.display');
let result;

//fixed bug
window.onload = function () {
  document.getElementById('clean').click();
}

//hang the handler on the buttons
for (let button of buttons) {
  button.addEventListener('click', calculate);
}

function calculate () {

  if (this.textContent == '=') {
    if (display.textContent !== '') {
     //output the result in a display
      result = math.evaluate(display.textContent);
      display.textContent = result;
      
      //output the result in a separate block
      let li = document.createElement('li');
      li.textContent = result;
      document.querySelector('.cache').append(li)
      
      //fixed divide by zero
      if (result == Infinity) {
        display.textContent = 'Divide by zero error';
      }
    }
  
  } else if (this.textContent == 'C') {
    display.textContent = '';
  } else {
    display.textContent += this.textContent;
  }
 
  
}











