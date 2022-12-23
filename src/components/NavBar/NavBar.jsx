import logo from "../../logo.png";
import CartWidget from "../CartWidget/CartWidget";

import "./navBar.scss";

export default function NavBar() {
  return (
    <div>
      <div className="navBar">
        <div className="img-logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="">Cositas</a>
            </li>
            <li>
              <a href="">Ropa</a>
            </li>
            <li>
              <a href="">Hogar</a>
            </li>
            <li>
              <a href="">Libros</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
            <li className="cart">
              <a>
                <CartWidget />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
