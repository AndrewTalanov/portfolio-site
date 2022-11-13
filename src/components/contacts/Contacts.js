import { setStyles } from "../../GlobalFunctions";

import styles from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <div className={setStyles(styles['btn-contacts'], 'btn-modal')}>Связаться</div>
    )
}

export default Contacts;