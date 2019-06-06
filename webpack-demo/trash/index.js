import _ from 'lodash'
import './style.css'
import img from './sample.jpg'
import Data from './data/test.xml'

function component() {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  console.log(Data)

  return element;
}


function componentTitle() {
  const element = document.createElement('div')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Title is', 'webpack'], ' ')
  element.classList.add('title')

  return element;
}

function imgComponent() {
  // Add the image to our existing div.
  const myImg = new Image()
  myImg.src = img

  return myImg
}

document.body.appendChild(component());
document.body.appendChild(componentTitle());
// document.body.appendChild(imgComponent());