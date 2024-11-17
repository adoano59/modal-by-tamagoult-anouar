import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

export default function Modal({ header, body, footer, outsideClick = true, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOutsideClick = (e) => {
    if (outsideClick && e.target.classList.contains('modal')) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {React.cloneElement(children, {
        onClick: (e) => {
          if (children.props.onClick) {
            children.props.onClick(e);
          }
          setIsOpen(true);
        },
      })}

      <div
        className={`modal ${isOpen ? 'modal-visible' : ''}`}
        onClick={handleOutsideClick}
      >
        <div className="modal-content">
          <button
            className="close-button"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>

          {header && <div className="modal-header">{header}</div>}
          <div className="modal-body">{body}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
  outsideClick: PropTypes.bool,
  children: PropTypes.node.isRequired,
};