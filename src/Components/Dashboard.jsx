import "../Styles/Dashboard.css";
import HighPriority from "./HighPriority";
import Piechart from "./Piechart";

export default function Dashboard() {
  return (
    <div className="dash">
      <h1>Dashboard</h1>
      <Piechart />
    <h3>Quick Actions</h3>
      <div className="section">
        <ul className="quickAcions">
          <li>
            <span className="material-symbols-outlined">label_important</span>{" "}
            Create Indents
          </li>
          <li>
            <span className="material-symbols-outlined">local_shipping</span>{" "}
            Add Vehicles
          </li>
          <li>
            <span className="material-symbols-outlined">rv_hookup</span> Add
            trailer
          </li>
          <li>
            <span className="material-symbols-outlined">person</span> Add Driver
          </li>
          <li>
            <span className="material-symbols-outlined">local_shipping</span>{" "}
            Add Indents
          </li>
        </ul>
      </div>
    <h3>High Priority alerts (14)</h3>
      <div className="section">
        <HighPriority
          logo={<span className="material-symbols-outlined">person</span>}
          title={"Driver Raised Concern"}
        />
        <HighPriority
          logo={<span className="material-symbols-outlined">device_thermostat</span>}
          title={"Reefer Temp. out of range"}
        />
      </div>
    </div>
  );
}
