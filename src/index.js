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
      <h1>Here is our Menu</h1> 
      {numPizzas > 0 && (
      <ul className="pizzas">
      {pizzas.map((pizza) => (<Pizza pizaObject={pizza} key={pizza.name}/>))}
      </ul>)}
      
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizaObject.photoName} alt={props.pizaObject.name} />
      <h3>{props.pizaObject.name}</h3>
      <p>{props.pizaObject.ingredients}</p>
      <p>{props.pizaObject.price}</p>
    </li>
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
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            we're open until {closingHours}:00. come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
