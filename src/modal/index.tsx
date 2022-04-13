import React, { useEffect } from 'react';
import { createPortal } from 'react-dom'
import { Props } from "../types";
import styles from './index.less';

const Modal = (props: Props) => {
    const { visible, closeModal, children, title, footer, onOk } = props;

    function handelClick(e: React.MouseEvent) {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }

    useEffect(() => {
        const el = document.getElementById('root');
        if (visible) {
            if (el && el.style) {
                el.style.filter = `blur(5px)`;
            }
        } else if (el && el.style) {
            el.style.filter = 'none';
        }
    }, [visible])

    const modalMask = createPortal(
        <div class={styles.modal_mask} onClick={(e: React.MouseEvent) => handelClick(e)}>
            <div class={styles.modal_body}>
                <div class={styles.modal_header}>{title}</div>
                <div class={styles.modal_content}>{children}</div>
                {
                    footer && footer.length === 0 ? null : (
                        <div class={styles.modal_footer}>
                            {
                                footer ? footer.map(item => {
                                    return item;
                                }) : (
                                        <>
                                            <button class={styles.button_default} style={{ marginRight: '10px', width: '80px' }} onClick={closeModal}>取消</button>
                                            <button class={styles.button_primary} style={{ width: '80px' }} onClick={onOk}>确认</button>
                                        </>
                                    )
                            }
                        </div>
                    )
                }
            </div>
        </div>
        , document.body);

    return <div>{visible && modalMask}</div>
}
export default Modal