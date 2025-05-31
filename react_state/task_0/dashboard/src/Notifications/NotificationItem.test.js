/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
});

describe('<NotificationItem />', () => {
    it('renders an <NotificationItems /> component', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders an <NotificationItem /> component with type and value', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.props()[ 'data-notification-type' ]).toEqual('default');
        expect(wrapper.text()).toEqual('test');
        expect(wrapper.html()).toContain('<li data-notification-type="default"');
        expect(wrapper.html()).toContain('test</li>');
    });

    it('renders an <NotificationItem /> component checking for html pass through', () => {
        const wrapper = shallow(<NotificationItem html={ { __html: '<u>test</u>' } } />);
        expect(wrapper.html()).toContain('<u>test</u>');
    });

    it('calls markAsRead with the right id', () => {
        const listNotifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', value: 'Holberton Danger' },
        ];

        const wrapper = shallow(<Notifications displayDrawer={ true } listNotifications={ listNotifications } />);

        const instance = wrapper.instance();
        const spy = jest.spyOn(instance, 'markAsRead');

        const item1 = wrapper.find(NotificationItem).at(0).dive();
        item1.simulate('click');
        expect(spy).toBeCalledWith(1);

        const item2 = wrapper.find(NotificationItem).at(1).dive();
        item2.simulate('click');
        expect(spy).toBeCalledWith(2);

        const item3 = wrapper.find(NotificationItem).at(2).dive();
        item3.simulate('click');
        expect(spy).toBeCalledWith(3);
    });
});
