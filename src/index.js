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
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Here is our Menu</h2> 
      
      {numPizzas > 0 ? (
        <>
        <p>
        Six creative dishes to choose from. Best African food for you.
      </p>
      <ul className="pizzas">
      {pizzas.map((pizza) => (<Pizza pizaObject={pizza} key={pizza.name}/>))}
      </ul>
      </>): (<p>we're still working on our menu. please come baack later.</p>)}
      
    </main>
  );
}

function Pizza({pizaObject}) {

  // if(pizaObject.soldOut) return null;

  return (
    <li className={`pizza ${pizaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizaObject.photoName} alt={pizaObject.name} />
      <h3>{pizaObject.name}</h3>
      <p>{pizaObject.ingredients}</p>
      <span>{pizaObject.soldOut ? "Sold Out" : pizaObject.price}</span>
    </li>
  );
}


function Footer() {
  const hours = new Date().getHours();
  const openHours = 8;
  const closingHours = 21;
  const isOpen = hours >= openHours && hours <= closingHours;

  
  return (
    <footer className="footer">
      {isOpen ? (
        <Order  openHours={openHours} closingHours={closingHours} />
      ): (<p>we are closed, we will be back at {openHours}:00 </p>)}
    </footer>
  );
}

function Order({openHours, closingHours}) {
  return (
    <div className="order">
          <p>
            we're open from {openHours}:00 to {closingHours}:00. come visit us or order online.
          </p>
          <button className="btn">Order</button>
  </div>
  );
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
