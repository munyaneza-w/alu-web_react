import { List, Map } from 'immutable';

function concatElements(page1, page2) {
  return List([...page1, ...page2]);
}

function mergeElements(page1, page2) {
  return Map({ ...page1, ...page2 });
}

export { concatElements, mergeElements };
