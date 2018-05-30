import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Setup from './Setup';

global.requestAnimationFrme = function(callback) {
    setTimeout(callback, 0);
};

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders the value', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.value').length).toBe(1);
});

it('renders the button', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('button#inc').length).toBe(1);
});

it('increments the value', () => {
  const wrapper = shallow(<App />);
  wrapper.find('button').simulate('click');
  expect(wrapper.find('.value').text()).toBe("0");
});
