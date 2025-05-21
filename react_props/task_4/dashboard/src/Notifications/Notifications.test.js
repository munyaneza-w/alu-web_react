import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
    it('renders an <Notifications /> component', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toHaveLength(1);
    });

    it('does display the menuItem when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={ false } />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('does not display div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={ false } />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('does display the menuItem when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={ true } />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('does not display div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={ true } />);
        expect(wrapper.find('.Notifications')).toHaveLength(1);
    });

    it('renders an <Notifications /> component checking for 3 NotificationItems', () => {
        const wrapper = shallow(<Notifications displayDrawer={ true } />);
        expect(wrapper.find('.Notifications ul NotificationItem')).toHaveLength(3);
    });

    it('verifies that the first NotificationItem element renders the html', () => {
        const wrapper = shallow(<Notifications displayDrawer={ true } />);
        expect(wrapper.html()).toContain('<li data-notification-type="default">New course available</li>');
    });
});
