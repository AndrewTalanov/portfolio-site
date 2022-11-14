import { useRef } from "react";

import { setStyles } from "../../GlobalFunctions.js";

import styles from "./Modal.module.scss";

import close from "../../img/close.svg";
import qrgit from "../../img/qrgit.svg";
import qrtg from "../../img/qrtg.svg";
import tgmes from "../../img/tgmes.svg";
import gitmes from "../../img/gitmes.svg";
import link from "../../img/link.svg";

const Modal = () => {

    const modalWrapper = useRef();

    const closeModal = () => {
        modalWrapper.current.style.left = '100vw';
    }

    return (
        <div ref={modalWrapper} className={setStyles(styles['modal-wrapper'], 'modal')}>
            <div className={styles['modal-container']}>
                <button className={setStyles(styles['modal-close'], 'btn-close-modal')} onClick={closeModal}>
                    <img src={close} alt="close modal" />
                </button>
                <div className={setStyles(styles['modal-left'], styles['modal-item'])}>
                    <div className={styles['modal-content']}>
                        <img className={styles['modal-icon']} src={tgmes} alt="telegram icon" />
                        <a href="tg.com" target="_blank" rel="noopener noreferrer">Telegram <img src={link} alt="link icon" /></a>
                    </div>
                    <div className={styles['modal-qr']}>
                        <img src={qrtg} alt="qr telegram code" />
                    </div>
                </div>
                <div className={setStyles(styles['modal-right'], styles['modal-item'])}>
                    <div className={styles['modal-content']}>
                        <img className={styles['modal-icon']} src={gitmes} alt="telegram icon" />
                        <a href="tg.com" target="_blank" rel="noopener noreferrer">Github <img src={link} alt="link icon" /></a>
                    </div>
                    <div className={styles['modal-qr']}>
                        <img src={qrgit} alt="qr github code" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;