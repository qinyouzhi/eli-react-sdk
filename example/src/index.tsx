import React from 'react';
import { createRoot } from 'react-dom/client';
import { Test } from '../../lib';

const App: React.FC = () => {
  return (
    <div>
      <Test name="123" />
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
