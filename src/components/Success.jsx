import React from 'react';
import ReactDOM from 'react-dom';

export const SuccessModal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    const handleOverlayClick = (e) => {
        e.stopPropagation();
        onClose();
    };

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return ReactDOM.createPortal(
        <div className="modal-wrapper-s" onClick={handleOverlayClick}>
            <div className="modal-s" onClick={handleModalClick}>
                <div className="title regular_h3">
                    Заявка<br/>
                    отправлена
                </div>
                <div className="footer" onClick={onClose}>
                    <div className="button regular_h4" >
                        Закрыть
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
