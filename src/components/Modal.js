import React from 'react';
import classNames from 'classnames';
import './Modal.scss';

const Modal = ({ open, onClose, children }) => {
  return (
    <>
      <div
        className={classNames('modal__backdrop', { show: open })}
        onClick={onClose}
      />
      <div className={classNames('modal', { show: open })}>
        <div className="modal__inner">{children}</div>
      </div>
    </>
  );
};

export default Modal;
