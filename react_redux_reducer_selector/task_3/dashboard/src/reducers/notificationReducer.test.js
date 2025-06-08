import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual({
      notifications: [],
      filter: NotificationTypeFilters.DEFAULT,
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };

    const state = notificationReducer(undefined, action);
    expect(state).toEqual({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    });
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const state = notificationReducer(initialState, action);
    expect(state).toEqual({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    });
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [],
    };

    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };

    const state = notificationReducer(initialState, action);
    expect(state).toEqual({
      filter: NotificationTypeFilters.URGENT,
      notifications: [],
    });
  });
});
