import { applyMiddleware, combineReducers, createStore } from 'redux';
import { routeReducer as route, syncHistory } from 'redux-simple-router';
import thunk from 'redux-thunk';
import { default as onelove } from './components/auth/actions';

const reducer = combineReducers({
  onelove,
  route,
});

export default function configureStore(initialState = {}, history) {
  const routerMiddleware = syncHistory(history);
  const middleware = applyMiddleware(thunk, routerMiddleware);
  const store = middleware(createStore)(reducer, initialState);
  return store;
}
