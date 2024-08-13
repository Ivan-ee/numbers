import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";

const CaseModal = ({ buttonLabel, children }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={'wrapper'}>
            <button
                type="button"
                className={'modalButton'}
                onClick={() => setShowModal(true)}
            >
                {buttonLabel}
            </button>

            {showModal && (
                <Modal onCloseRequest={() => setShowModal(false)}>{children}</Modal>
            )}
        </div>
    );
};

CaseModal.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default CaseModal;
