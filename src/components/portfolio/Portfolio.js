import PortfolioItem from '../portfolio-item/PortfolioItem';
import { data } from '../../DataSites.js';

import styles from './Portfolio.module.scss';

const Portfolio = () => {
    return (
        <div className={styles.portfolio}>
            {data.map(item => {
                return <PortfolioItem key={item.id} img={item.img} flag={item.flag} title={item.title} id={item.id}/>
            })}
        </div>
    );
}

export default Portfolio;