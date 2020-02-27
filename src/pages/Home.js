import React from 'react';
import Heading from '../components/Heading';
import Card from '../components/Card';
import List from '../components/List';
import PaymentItem from '../components/PaymentItem';
import './Home.scss';

const Balance = () => {
  return (
    <Card className="Home__Balance">
      <h1>Spent</h1>
      <h1>Earn</h1>
    </Card>
  );
};

const PaymentHistoryList = ({ payments }) => {
  return (
    <List className="Home__PaymentHistoryList">
      {payments?.map(payment => (
        <List.Item border key={payment.id}>
          <PaymentItem payment={payment}></PaymentItem>
        </List.Item>
      ))}
    </List>
  );
};

const mockPayments = [
  {
    id: 12,
    date: '2020-02-20',
    category: '交通',
    subCategory: '私家车',
    note: '车辆年审',
    amount: 260
  },
  {
    id: 11,
    date: '2020-02-20',
    category: '投资',
    subCategory: '保险',
    note: '相互保月费',
    amount: 12.83
  },
  {
    id: 10,
    date: '2020-02-19',
    category: '健康',
    subCategory: '',
    note: '口罩',
    amount: 38.2
  },
  {
    id: 9,
    date: '2020-02-19',
    category: '餐饮',
    subCategory: '午餐',
    note: '',
    amount: 15
  },
  {
    id: 8,
    date: '2020-02-20',
    category: '交通',
    subCategory: '私家车',
    note: '车辆年审',
    amount: 260
  },
  {
    id: 7,
    date: '2020-02-20',
    category: '投资',
    subCategory: '保险',
    note: '相互保月费',
    amount: 12.83
  },
  {
    id: 6,
    date: '2020-02-19',
    category: '健康',
    subCategory: '',
    note: '口罩',
    amount: 38.2
  },
  {
    id: 5,
    date: '2020-02-19',
    category: '餐饮',
    subCategory: '午餐',
    note: '',
    amount: 15
  },
  {
    id: 4,
    date: '2020-02-20',
    category: '交通',
    subCategory: '私家车',
    note: '车辆年审',
    amount: 260
  },
  {
    id: 3,
    date: '2020-02-20',
    category: '投资',
    subCategory: '保险',
    note: '相互保月费',
    amount: 12.83
  },
  {
    id: 2,
    date: '2020-02-19',
    category: '健康',
    subCategory: '',
    note: '口罩',
    amount: 38.2
  },
  {
    id: 1,
    date: '2020-02-19',
    category: '餐饮',
    subCategory: '午餐',
    note: '',
    amount: 15
  }
];

const Home = () => {
  return (
    <div className="Home">
      <Heading className="Home__Heading" round>
        <h1>Some heading</h1>
      </Heading>
      <Balance />
      <PaymentHistoryList payments={mockPayments} />
    </div>
  );
};

export default Home;
