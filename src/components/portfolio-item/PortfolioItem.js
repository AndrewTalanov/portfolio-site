import { setStyles } from "../../GlobalFunctions";
import styles from "./PortfolioItem.module.scss";

const PortfolioItem = ({img, id, title}) => {

    return (
        <div className={setStyles(styles['item-container'])}>
            <div style={{backgroundImage: `url(${img})`}} className={styles['item-content']}>
                
            </div>
            <p className={id}>{title}</p>
        </div>
    );

}

export default PortfolioItem;