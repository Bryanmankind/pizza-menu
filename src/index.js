import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
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
