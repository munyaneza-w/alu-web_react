import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
    it('renders an <Notifications /> component', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <Notifications /> component checking for 3 NotificationItems', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications ul NotificationItem')).toHaveLength(3);
    });

    it('verifies that the first NotificationItem element renders the html', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.html()).toContain('<li data-notification-type="default">New course available</li>');
    });
});
