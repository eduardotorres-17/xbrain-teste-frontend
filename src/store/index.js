import { legacy_createStore as createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  form: formReducer
});

const store = createStore(rootReducer);

export default store;