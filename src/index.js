import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./pizzaData";

//  React Component
function App() {
  return (
    <>
    <Header/>
    <Menu />
    <Footer/>
    </>
  )
}

function Header () {

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu () {

  const pizzaMenu = pizzaData;

  const numpizzaMenu = pizzaMenu.length

  return (
    <main className='menu'>

      <h2>HERE IS OUR MENU</h2>

      {numpizzaMenu > 0 ? 
      <>
      <p>A collection of good different African dishes for you.</p>
      <ul className="pizzas">
     { pizzaMenu.map((pizza) => (<Pizza pizzaMenuObject={pizza} key={pizza.name} />))}
      </ul> </>: ("We are still working on our menu. Come back in 24hrs time")
      }

    </main>
  )
}

function Pizza ({pizzaMenuObject}) {
  return (
    <li className={`pizza ${pizzaMenuObject.soldOut ? "sold-out" : ""}`}>
   <img src={pizzaMenuObject.photoName} alt={pizzaMenuObject.name} />
   <h3>{pizzaMenuObject.name}</h3>
   <p>{pizzaMenuObject.ingredients}</p>
   <span>{pizzaMenuObject.soldOut ? "soldOut" : pizzaMenuObject.price}</span>
    </li>
  )

}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 8;
  const closingHours = 21;
  const isOpen = hour >= openHours && hour <= closingHours;
  return (
    <footer className='footer'>
      {isOpen ? (<Order openHours={openHours} closingHours={closingHours}/>) :  (<p>
        `we will be open at ${openHours}`
      </p> )}
    </footer>
  )
}

function Order ({openHours, closingHours}) {
  return (
    <div className='order'>
      <p>we are open from {openHours}am to {closingHours}pm, come visit us or make your orders on line</p>

      <button className='btn'>Order</button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
