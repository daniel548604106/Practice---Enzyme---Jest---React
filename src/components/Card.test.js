import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

// Mount - Full DOM Rendering , used when we access a DOM API in the component (.querySelectorAll())

// Shallow Render - We just want to run test on a component once without affecting the children

// Render - render component to a static html

it('expect to render once', () => {
  expect(shallow(<Card />).length).toEqual(1);
  expect(shallow(<Card />)).toMatchSnapshot();
});
