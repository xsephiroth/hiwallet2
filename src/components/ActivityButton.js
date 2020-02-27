import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ActivityButton.scss';

const ActivityButton = ({ icon, text, onClick }) => {
  return (
    <button className="ActivityButton" onClick={onClick}>
      <label>
        <FontAwesomeIcon icon={icon} />
      </label>
      {text}
    </button>
  );
};

export default ActivityButton;
