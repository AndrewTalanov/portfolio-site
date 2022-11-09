import { setStyles } from './GlobalFunctions';

import styles from './App.module.scss';
import cursor from './components/cursor/Cursor.module.scss';

import Cursor from './components/cursor/Cursor';
import Portfolio from './components/portfolio/Portfolio';
import Swiper from './components/swiper.js/Swiper';
import Contacts from './components/contacts/Contacts';

function App() {

  return (
    <div className={setStyles(styles.app, cursor['cursor-hover'])}>

      <Cursor/>
      <Portfolio/>
      <Swiper/>
      <Contacts/>

    </div>
  );
}

export default App;
