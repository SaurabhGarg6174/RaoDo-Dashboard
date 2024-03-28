import "../Styles/Navbar.css";
import logo from "../Assets/logo.png";

export default function Navbar() {
  return (
    <>
      <ul>
        <li className="mainLogo">
          <img src={logo} alt="logo" />
        </li>
        <li>
          <span className="material-symbols-outlined">dashboard</span>
        </li>
        <li>
          <span className="material-symbols-outlined">add_to_queue</span>
        </li>
        <li>
          <span className="material-symbols-outlined">label_important</span>
        </li>
        <li>
          <span className="material-symbols-outlined">assignment</span>
        </li>
        <li>
          <span className="material-symbols-outlined">train</span>
        </li>
        <li>
          <span className="material-symbols-outlined">local_shipping</span>
        </li>
        <li>
          {/* <span className="material-symbols-outlined">local_shipping</span> */}
          <span className="material-symbols-outlined">package</span>
        </li>
        <li>
          <span className="material-symbols-outlined">business_center</span>
        </li>
        <li>
          <span className="material-symbols-outlined">
            account_balance_wallet
          </span>
        </li>
        <li>
          <span className="material-symbols-outlined">dynamic_feed</span>
        </li>
        <li>
          <span className="material-symbols-outlined">settings</span>
        </li>
      </ul>
    </>
  );
}
