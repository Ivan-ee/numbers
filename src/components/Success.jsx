import React from 'react';
import ReactDOM from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion';

export const SuccessModal = ({show, onClose}) => {
    const handleOverlayClick = (e) => {
        e.stopPropagation();
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return ReactDOM.createPortal(
        <AnimatePresence>
            {show && (
                <motion.div
                    className="modal-wrapper-s"
                    onClick={handleOverlayClick}
                    initial={{opacity: 1}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.4}}
                >
                    <div
                        className="modal-s"
                        onClick={handleModalClick}
                    >
                        <div className="title regular_h3">
                            Заявка<br/>
                            отправлена
                        </div>
                        <div className="footer" onClick={onClose}>
                            <div className="button regular_h4">
                                Закрыть
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};
