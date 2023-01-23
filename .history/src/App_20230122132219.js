import Header from "./components/header/header";
import "./app.css";
import Product from "./components/product/product";
import img1 from "./png/topas1.png";
import img2 from "./png/topas2.png";
import img3 from "./png/topas3.png";
import img4 from "./png/topas4.png";

function App() {
  return (
    <div className="App">
      <Header />
      <Product
        name="Топас-С 4"
        images={[img1, img2, img3, img4, img1, img2, img3, img4]}
        characteristics={[
          { characteristic: "Количество пользователей:", value: "4 человека" },
          { characteristic: "Производительность:", value: "0.8 м3/сут" },
          { characteristic: "Объем залпового сброса:", value: "175 л." },
          { characteristic: "Количество пользователей:", value: "4 человека" },
          { characteristic: "Количество пользователей:", value: "4 человека" },
        ]}
      />
    </div>
  );
}

export default App;
