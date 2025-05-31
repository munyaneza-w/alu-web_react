import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

describe('<Footer />', () => {
    it('renders an <Footer /> component', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <Footer /> component checking for App-Footer', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('div p').text()).toContain('Copyright');
    });
});
