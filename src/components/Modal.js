import React, { useEffect } from 'react';
import classNames from 'classnames';
import './Modal.scss';

const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    let overflow = 'auto';
    if (open) {
      overflow = 'hidden';
    }
    window.document.body.style.overflow = overflow;
  }, [open]);

  return (
    <>
      <div
        className={classNames('modal__backdrop', { show: open })}
        onClick={onClose}
      />
      <div className={classNames('modal', { show: open })}>{children}</div>
    </>
  );
};

export default Modal;
