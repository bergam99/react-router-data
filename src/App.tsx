import { Fragment } from "react";
import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Produits</NavLink>
        </li>
      </ul>
      <Outlet />
      <p> footer</p>
    </Fragment>
  );
}

export default App;
