import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
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
