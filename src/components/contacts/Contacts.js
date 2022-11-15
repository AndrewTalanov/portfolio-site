import { setStyles } from "../../GlobalFunctions";

import styles from "./Contacts.module.scss";

const Contacts = () => {

    const openModal = () => {
        document.querySelector('.modal').style.opacity = 1;
        document.querySelector('.modal').style.pointerEvents = 'all';
        document.querySelector('.modal-container').style.right = 0;
    }

    return (
        <div className={setStyles(styles['btn-contacts'], 'btn-modal')} onClick={openModal}>Связаться</div>
    )
}

export default Contacts;