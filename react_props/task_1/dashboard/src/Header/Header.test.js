import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
    it('renders an <Header /> component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <Header /> component checking for img', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.App-header img')).toHaveLength(1);
    });

    it('renders an <Header /> component checking for heading', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.App-header h1')).toHaveLength(1);
    });
});
