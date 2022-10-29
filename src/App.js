import { setStyles } from './GlobalFunctions';

import styles from './App.module.scss';
import cursor from './components/cursor/Cursor.module.scss';

import Cursor from './components/cursor/Cursor';
import Portfolio from './components/portfolio/Portfolio';
import Swiper from './components/swiper.js/Swiper';

function App() {

  return (
    <div className={setStyles(styles.app, cursor['cursor-hover'])}>

      <Cursor/>
      <Portfolio/>
      <Swiper/>

    </div>
  );
}

export default App;
