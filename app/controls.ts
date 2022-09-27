import {width} from './canvas';

export let controlBox : HTMLDivElement = document.querySelector('#controls');
controlBox.style.width = `${width}px`

export function makeButton (name : string) : HTMLButtonElement {
  let button = document.createElement("button");
  
  button.innerText = name;
  controlBox.appendChild(button);
  return button;
}

export function makeInput (inputtype : string,) : HTMLInputElement {
  let input = document.createElement('input')
  input.setAttribute('type',inputtype);
  controlBox.appendChild(input)
  return input
}