import React from 'react';
import Heading from '../components/Heading';
import Card from '../components/Card';
import ActivityButton from '../components/ActivityButton';
import List from '../components/List';
import PaymentItem from '../components/PaymentItem';
import './Home.scss';

const Activity = () => {
  return (
    <Card className="Home__Activity">
      <div className="Home__Activity__Balance">
        <div className="Home__Activity__Balance__Info">
          <label className="circle expense" />
          <div className="text">
            <p>支出</p>
            <h3>12345.67</h3>
          </div>
        </div>
        <div className="Home__Activity__Balance__Info">
          <label className="circle income" />
          <div className="text">
            <p>收入</p>
            <h3>12345.67</h3>
          </div>
        </div>
      </div>
      <div className="Home__Activity__Buttons">
        <ActivityButton icon="plus-square" text="记账" />
        <ActivityButton icon="chart-bar" text="分析" />
        <ActivityButton icon="cog" text="管理" />
      </div>
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
      <Activity />
      <PaymentHistoryList payments={mockPayments} />
    </div>
  );
};

export default Home;
