import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  let router = useRoutes(routes);

  return (
    <div className="appBgc ">
      <div className="container">
        <Navbar />
        {router}
        <Footer/>
      </div>

    </div>
  );
}

export default App;
