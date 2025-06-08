import { schema } from 'normalizr';

export const course = new schema.Entity('courses');
export const coursesNormalizer = (data) => {
  const normalizedData = normalize(data, [course]);
  return normalizedData.entities;
};
