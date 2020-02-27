import React from 'react';
import classNames from 'classnames';
import './PaymentItem.scss';

const Date = ({ date: propDate }) => {
  const date = new window.Date(propDate);
  return (
    <div className="PaymentItem__Date">
      <h6 className="month">{`${date.getMonth() + 1}月`}</h6>
      <h4 className="day">{`${date.getDate()}`}</h4>
    </div>
  );
};

const Info = ({ category, subCategory, note }) => {
  return (
    <div className="PaymentItem__Info">
      <div className="PaymentItem__Info__Category">
        <h4 className="main">{category}</h4>
        <h6 className="sub">{subCategory}</h6>
      </div>
      <p className="PaymentItem__Info__Note">{note}</p>
    </div>
  );
};

const PaymentItem = ({ payment, className }) => {
  return (
    <div className={classNames('PaymentItem', className)}>
      <Date date={payment.date}></Date>
      <Info
        category={payment.category}
        subCategory={payment.subCategory}
        note={payment.note}
      ></Info>
      <h4 className="PaymentItem__Amount">{payment.amount?.toFixed(2)}</h4>
    </div>
  );
};

export default PaymentItem;
