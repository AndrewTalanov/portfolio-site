import { setStyles } from './GlobalFunctions';

import styles from './App.module.scss';
import cursor from './components/cursor/Cursor.module.scss';

import PortfolioItem from './components/portfolio-item/PortfolioItem';
import Cursor from './components/cursor/Cursor';

import image1 from "./img/1.jpg";
import image2 from "./img/2.jpg";

function App() {

  return (
    <div className={setStyles('App', cursor['cursor-hover'])}>

      <Cursor/>

      <div className={styles.portfolio}>
        <PortfolioItem img={image1} id="item" title="Сайт О Бытии Ростовой"/>
        <PortfolioItem img={image2} id="item" title="О соломенной крыше"/>
        <PortfolioItem img={image1} id="item" title="Покупай, налетай"/>
        <PortfolioItem img={image2} id="item"  title="Или нет..."/>
        <PortfolioItem img={image1} id="item"  title="Сайт О Бытии Ростовой "/>
        <PortfolioItem img={image2} id="item"  title="а тут нет"/>
      </div>

    </div>
  );
}

export default App;
