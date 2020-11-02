import Weather from "./Weather";
import Footer from "./Footer";


import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import "./Styles.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Madrid" />
      <Footer />
    </div>
  );
}
