import { setStyles } from './GlobalFunctions';

import styles from './App.module.scss';
import cursor from './components/cursor/Cursor.module.scss';

import Cursor from './components/cursor/Cursor';
// import Portfolio from './components/portfolio/Portfolio';
// import Swiper from './components/swiper/Swiper';
import Contacts from './components/contacts/Contacts';
// import Marquee from './components/marquee/Marquee';
import Modal from './components/modal/Modal';
import Slider from './components/slider/Slider';

function App() {

  return (
    <div className={setStyles(styles.app, cursor['cursor-hover'])}>

      {/* <Marquee/> */}
      <Cursor/>
      {/* <Portfolio/> */}
      {/* <Swiper/> */}
      <Slider/>
      <Contacts/>
      <Modal/>

    </div>
  );
}

export default App;
