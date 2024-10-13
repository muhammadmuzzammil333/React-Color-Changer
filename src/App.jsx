import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const redBttnFunction = () => {
    document.body.style.backgroundColor = 'red';
    console.log('red bttn was clicked');
  }

const greenBttnFunction = () => {
document.body.style.backgroundColor = 'green';
}

const blueBttnFunction = () => {
document.body.style.backgroundColor = 'blue';
}

const oliveBttnFunction = () => {
document.body.style.backgroundColor = 'olive';
}

const greyBttnFunction = () => {
document.body.style.backgroundColor = 'grey';
}

const yellowBttnFunction = () => {
document.body.style.backgroundColor = 'yellow';
}

const pinkBttnFunction = () => {
document.body.style.backgroundColor = 'pink';
}

const purpleBttnFunction = () => {
document.body.style.backgroundColor = 'purple';
}

const lavenderBttnFunction = () => {
document.body.style.backgroundColor = 'lavender';
}

const whiteBttnFunction = () => {
document.body.style.backgroundColor = 'white';
}

const blackBttnFunction = () => {
document.body.style.backgroundColor = 'black';
}




  const [BgColor, setBgColor] = useState('white')
 
  return (
    <>    
   <div id='allBttn'>
    <div>
   <button className='RedBttn' onClick={redBttnFunction}>Red</button>
   <button className="GreenBttn"  onClick={greenBttnFunction}>Green</button>
   <button className="BlueBttn"  onClick={blueBttnFunction}>Blue</button>
   <button className="OliveBttn" onClick={oliveBttnFunction}>Olive</button>
   <button className="GreyBttn" onClick={greyBttnFunction}>Grey</button>
   <button className="YellowBttn" onClick={yellowBttnFunction}>Yellow</button>
   <button className="PinkBttn" onClick={pinkBttnFunction}>Pink</button>
   <button className="PurpleBttn" onClick={purpleBttnFunction}>Purple</button>
   <button className="LavenderBttn" onClick={lavenderBttnFunction}>Lavender</button>
   <button className="WhiteBttn" onClick={whiteBttnFunction}>White</button>
   <button className="BlackBttn" onClick={blackBttnFunction}>Black</button>
   </div>
   </div>
   </>
  )
}

export default App
