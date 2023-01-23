import Header from "./components/header/header";
import "./app.css";
import Product from "./components/product/product";
function App() {
  return (
    <div className="App">
      <Header />
      <Product name="Топас-С 4" />
    </div>
  );
}

export default App;
