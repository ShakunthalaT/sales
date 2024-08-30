import ChartPie from "../ChartPie";
import Header from "../Header";
import ChartLine from "../ChartLine";
import Sidebar from "../Sidebar";
import "./index.css";

const Home = () => (
  <div className="app-container">
    <div className="main-container">
      <Sidebar />
      <div className="home">
        <Header />
        <div className="home-container">
          <div className="line-chart-container">
            <h1 className="heading">Sales vs Orders</h1>
            <ChartLine />
          </div>
          <div className="pie-chart-container">
            <h1 className="heading">Portion of Sales</h1>
            <ChartPie />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
