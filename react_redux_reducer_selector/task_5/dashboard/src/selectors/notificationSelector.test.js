import { Map } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('notification selectors', () => {
  const mockState = {
    notifications: Map({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: Map({
        '1': Map({
          id: '1',
          isRead: false,
          type: 'default',
          value: 'New course available',
        }),
        '2': Map({
          id: '2',
          isRead: true,
          type: 'urgent',
          value: 'New resume available',
        }),
        '3': Map({
          id: '3',
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        }),
      }),
    }),
  };

  it('filterTypeSelected returns the filter value', () => {
    const filter = filterTypeSelected(mockState);
    expect(filter).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('getNotifications returns all notifications in Map format', () => {
    const notifications = getNotifications(mockState);
    expect(notifications.size).toBe(3);
    expect(notifications.get('1').toJS()).toEqual({
      id: '1',
      isRead: false,
      type: 'default',
      value: 'New course available',
    });
  });

  it('getUnreadNotifications returns only unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(mockState);
    expect(unreadNotifications.size).toBe(2);
    expect(unreadNotifications.get('1').toJS()).toEqual({
      id: '1',
      isRead: false,
      type: 'default',
      value: 'New course available',
    });
    expect(unreadNotifications.get('3').toJS()).toEqual({
      id: '3',
      isRead: false,
      type: 'urgent',
      value: 'New data available',
    });
  });
});
