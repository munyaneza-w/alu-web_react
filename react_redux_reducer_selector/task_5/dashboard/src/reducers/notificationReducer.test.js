import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import { Map } from 'immutable';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(Map({
      notifications: Map(),
      filter: NotificationTypeFilters.DEFAULT,
    }));
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };

    const state = notificationReducer(undefined, action);
    expect(state.getIn(['notifications', '1'])).toEqual({
      id: 1, type: 'default', value: 'New course available', isRead: false
    });
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Map({
      notifications: Map({
        '1': { id: 1, type: 'default', value: 'New course available', isRead: false },
        '2': { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      }),
      filter: NotificationTypeFilters.DEFAULT,
    });

    const action = {
      type: MARK_AS_READ,
      index: '1',
    };

    const state = notificationReducer(initialState, action);
    expect(state.getIn(['notifications', '1', 'isRead'])).toBe(true);
  });
});
