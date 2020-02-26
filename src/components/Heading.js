import React from 'react';
import classNames from 'classnames';
import './Heading.scss';

const Heading = ({
  className,
  height,
  round,
  roundReverse,
  onBackClick,
  children
}) => {
  return (
    <div
      className={classNames(
        'heading',
        {
          roundWrapper: round,
          roundReverseWrapper: roundReverse
        },
        { className }
      )}
      style={{ height: height ?? '' }}
    >
      <div className={classNames({ round, roundReverse })} />
      <div className="content">{children}</div>
    </div>
  );
};

export default Heading;
