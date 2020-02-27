import React from 'react';
import classNames from 'classnames';
import './List.scss';

const List = ({ className, children }) => {
  return (
    <div>
      <ul className={classNames('List', className)}>{children}</ul>
    </div>
  );
};

const Item = ({ border, children }) => {
  return (
    <li className="List__Item">
      {children}
      <div className={classNames({ border })}></div>
    </li>
  );
};

List.Item = Item;

export default List;
