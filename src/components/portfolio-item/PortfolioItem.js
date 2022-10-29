import { setStyles } from "../../GlobalFunctions";
import styles from "./PortfolioItem.module.scss";

const PortfolioItem = ({img, flag, title, id}) => {

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