import React from 'react';
import Heading from '../components/Heading';
import Card from '../components/Card';
import './Home.scss';

const Balance = () => {
  return (
    <Card className="Home__Balance">
      <h1>Spent</h1>
      <h1>Earn</h1>
    </Card>
  );
};

const Home = () => {
  return (
    <div className="Home">
      <Heading className="Home__Heading" round>
        <h1>Some heading</h1>
      </Heading>
      <Balance />
    </div>
  );
};

export default Home;
