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
          { characteristic: "Глубина подводящей трубы:", value: "40-80 см" },
          {
            characteristic: "Потребляемая электроэнергия:",
            value: "1500 Вт/сут.",
          },
        ]}
        price="78 030 ₽"
        description="Индивидуальная система биологической очистки Топас-С 4, как и другие УОСВ из данного модельного ряда, очищают стоки до 98% без вреда для экологии. Все модификации септика ТОПАС-С 4 очищают до 0.8 м3 сточных вод в сутки и имеют максимальный залповый сброс в районе 175 литров. Уже отработанную воду можно накапливать в отдельном резервуаре и в дальнейшем использовать для хозяйственных нужд или производить сброс очищенной воды в ливневую канаву (для моделей Пр со встороенным насосом)."
      />
    </div>
  );
}

export default App;
