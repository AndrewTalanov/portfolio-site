import { setStyles } from "../../GlobalFunctions";

import styles from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <div className={setStyles(styles['btn-contacts'], 'btn-modal')}></div>
    )
}

export default Contacts;