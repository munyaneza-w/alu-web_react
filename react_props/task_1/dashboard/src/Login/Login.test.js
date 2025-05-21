import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
    it('renders an <Login /> component checking for App-Login', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div.App-body')).toHaveLength(1);
    });

    it('renders an <Login /> component checking for input', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div.App-body input')).toHaveLength(2);
    });

    it('renders an <Login /> component checking for label', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('div.App-body label')).toHaveLength(2);
    });
});
