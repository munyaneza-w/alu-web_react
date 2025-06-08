import { Map } from 'immutable';

// Selector that returns the value of the filter
export const filterTypeSelected = (state) => {
  return state.notifications.get('filter');
};

// Selector that returns all notifications in Map format
export const getNotifications = (state) => {
  return state.notifications.get('notifications');
};

// Selector that returns unread notifications in Map format
export const getUnreadNotifications = (state) => {
  const notifications = state.notifications.get('notifications');
  return notifications.filter(notification => !notification.get('isRead'));
};
