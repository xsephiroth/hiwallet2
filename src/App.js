import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

const Home = lazy(() => import('./pages/Home'));
const Billings = lazy(() => import('./pages/Billings'));

function App() {
  return (
    <Suspense fallback={<div className="fallback">Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/billings" component={Billings} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
