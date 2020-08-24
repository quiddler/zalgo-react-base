import React from 'react';
import { shallow } from 'enzyme';
import ExampleCard from './example-card';

it('renders welcome message', () => {
  const html = shallow(<ExampleCard />);
  const text = <p>hello Dhruval</p>;
  expect(html).toContain(text);
});