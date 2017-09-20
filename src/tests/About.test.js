import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/About';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<About />, div);
});
