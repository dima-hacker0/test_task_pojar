import Header from "./components/header/header";
import "./app.css";
import Product from "./components/product/product";
import img1 from "./png/topas1.png";
import img2 from "./png/topas2.png";
import img3 from "./png/topas3.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Product name="Топас-С 4" images={[img1, img2, img3, img1, img2, img3]} />
    </div>
  );
}

export default App;
