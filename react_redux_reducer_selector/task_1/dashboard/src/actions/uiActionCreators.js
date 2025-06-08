import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    },
  };
};
export const boundlogin = (index) => dispatch(login(index));

export const logout = () => {
  return { type: LOGOUT };
};
export const boundlogout = (index) => dispatch(logout(index));

export const displayNotificationDrawer = () => {
  return { type: DISPLAY_NOTIFICATION_DRAWER };
};
export const bounddisplayNotificationDrawer = (index) =>
  dispatch(displayNotificationDrawer(index));

export const hideNotificationDrawer = () => {
  return { type: HIDE_NOTIFICATION_DRAWER };
};
export const boundhideNotificationDrawer = (index) =>
  dispatch(hideNotificationDrawer(index));

export const loginSuccess = () => {
  return { type: LOGIN_SUCCESS };
};

export const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const loginRequest = (email, password) => {
  return function (dispatch) {
    dispatch(login(email, password));
    return fetch("http://localhost:3000/login-success.json")
      .then((response) => response.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((err) => dispatch(loginFailure()));
  };
};