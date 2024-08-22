import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {motion, AnimatePresence} from 'framer-motion';

export const SuccessModal = ({show, onClose, initial}) => {
    const handleOverlayClick = (e) => {
        e.stopPropagation();
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Очистка стиля при размонтировании компонента
        return () => {
            document.body.style.overflow = '';
        };
    }, [show]);

    return ReactDOM.createPortal(
        <AnimatePresence>
            {show && (
                <motion.div
                    className="modal-wrapper-s"
                    onClick={handleOverlayClick}
                    initial={{opacity: initial}}
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
