import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ is_top_modal_open, onClick }) => {
  return (
    <div style={{
      display: is_top_modal_open ? 'block'  : 'none',
    }}>
      modal
      <button onClick={() => onClick()}>close</button>
    </div>
  );
};

Modal.propTypes = {
  is_top_modal_open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
