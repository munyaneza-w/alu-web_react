import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual(Map({
      courses: Map(),
    }));
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    const action = {
      type: FETCH_COURSE_SUCCESS,
      data,
    };

    const state = courseReducer(undefined, action);
    expect(state.getIn(['courses', '1'])).toEqual({
      id: 1, name: 'ES6', credit: 60, isSelected: false
    });
    expect(state.getIn(['courses', '2'])).toEqual({
      id: 2, name: 'Webpack', credit: 20, isSelected: false
    });
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = Map({
      courses: Map({
        '1': { id: 1, name: 'ES6', credit: 60, isSelected: false },
        '2': { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      }),
    });

    const action = {
      type: SELECT_COURSE,
      index: '1',
    };

    const state = courseReducer(initialState, action);
    expect(state.getIn(['courses', '1', 'isSelected'])).toBe(true);
  });
});
