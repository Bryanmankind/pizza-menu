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
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  return <h1 style={style}>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div className="menu">
      <h1>Here is our Menu</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHours = 12;
  const closingHours = 22;
  const isOpen = hours >= openHours && hours <= closingHours;
  console.log(isOpen);

  // if (hours >= openHours && hours <= closingHours)
  //   alert("we're currently open!");
  // else alert("Sorry we are close!!!");
  // return (
  //   <footer>{new Date().toLocaleTimeString()}.we're currently open</footer>
  // );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/salamino.jpg" alt="salamino" />
      <h2>Pizza Salamino</h2>
      <p>Tomato, mozarella, and pepperoni</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
