
import { useState, useReducer, useEffect } from 'react';
import './App.css'
import  Taylor1 from './Images/Taylor1.jpg'


const items = 
[ 
  "Choco Chip Cookies",
  "Pistachio Cookies",
  "Butter Cookies"
];

const dataObjects = items.map((item,i) => ({
  id: i,
  title: item
}));

function Header({name, year}) {
  return (
    <header>
      <h1>{name}'s Cookies</h1>
      <p>Since {year}</p>
    </header>
  );
}

function Main({Cookies, openStatus, onStatus}){
  return(
    <>
    <div>
      <button onClick={()=> onStatus(true)}>I want to open</button>
      <h2>Welcome to the Bakery.{openStatus ? "Open": "Close"}</h2>
    </div>
    <main>
    <img src={Taylor1} height={200} alt='Taylor Swift\s image'/>
    <ul>{
      Cookies.map((cookie)=> (
        <li key={cookie.id} style={{listStyleType: 'none'}}>{cookie.title}</li>
      ))
    }</ul>
    </main>
    </>
  );
}

function App() {

  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((status)=> !status, true);

  useEffect(() => {
    console.log(`the restaurant is ${status ? "Open" : "closed"}.`)
  },[]) // works only on first render ( call back function, dependency array)


// useEffect(() => {
//     console.log(`the restaurant is ${status ? "Open" : "closed"}.`)
//   },[status]) //Works for state change
  
  return(<div>
    <h1>The Bakery is {status ? "open" : "close"}.</h1>
    <button onClick={toggle}>{status ? "Close" : "Open"} Restaurant</button>
   <Header name="Prudhvi" year={2000} />
  <Main Cookies = {dataObjects} openStatus={status} onStatus ={toggle}/>
  </div>);
}

export default App
