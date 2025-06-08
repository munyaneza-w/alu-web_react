import { schema } from 'normalizr';

export const notification = new schema.Entity('notifications');
export const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);
  return normalizedData.entities;
};