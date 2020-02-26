import React from 'react';
import classNames from 'classnames';
import './Card.scss';

const Card = ({ className, children }) => {
  return <div className={classNames('card', className)}>{children}</div>;
};

export default Card;
