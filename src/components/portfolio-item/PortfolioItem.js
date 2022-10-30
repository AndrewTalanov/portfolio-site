import { setStyles } from "../../GlobalFunctions";
import styles from "./PortfolioItem.module.scss";

const PortfolioItem = ({img, flag, title, id}) => {

        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    (function init100vh(){
        function setHeight() {
          var vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        setHeight();
        window.addEventListener('resize', setHeight);
    })();

    return (
        <div className={styles['item-wrapper']} data-site={id}>
            <div className={setStyles(styles['item-container'])}>
                <div style={{backgroundImage: `url(${img})`}} className={styles['item-content']}></div>
                <p className={flag}>{title}</p>
            </div>
        </div>
    );

}

export default PortfolioItem;