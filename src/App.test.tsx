import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to Zalgo</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});