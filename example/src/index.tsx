import React from 'react';
import { render } from 'react-dom';
import { Test } from '../../src';

const App: React.FC = () => {
  return (
    <div>
      <Test name="123" />
    </div>
  );
};

render(<App />, document.querySelector('#app'));
