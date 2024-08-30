import "./index.css";

const Sidebar = () => (
  <div className="sidebar-view">
    <ul className="ul-container">
      <li className="dashboard">Dashboard</li>
      <li className="list">Inventory</li>
      <li className="list">Inventory</li>
      <li className="list">Order</li>
      <li className="list">Returns</li>
      <li className="list">Customers</li>
      <li className="list">Shipping</li>
      <li className="list">Channel</li>
      <li className="list">Integrations</li>
    </ul>
    <div className="select-container">
      <select className="option">
        <option className="option-list">Calculators</option>
      </select>
      <select className="option">
        <option>Reports</option>
      </select>
      <select className="option">
        <option>Account</option>
      </select>
    </div>
  </div>
);

export default Sidebar;
