import uiReducer from './uiReducers';
import { Map } from 'immutable';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';
import { initialState } from './uiReducer';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true,
    });
  });

  it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {

    const state1 = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });

    const state2 = uiReducer(state1, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state2.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: false,
    });
  });

  it('should change isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: true,
    });
  });

  it('should change isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {

    const state1 = uiReducer(undefined, { type: LOGIN_SUCCESS });

    const state2 = uiReducer(state1, { type: LOGIN_FAILURE });
    expect(state2.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false,
    });
  });

  it('should change isUserLoggedIn to false when LOGOUT is passed', () => {

    const state1 = uiReducer(undefined, { type: LOGIN_SUCCESS });

    const state2 = uiReducer(state1, { type: LOGOUT });
    expect(state2.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false,
    });
  });
});