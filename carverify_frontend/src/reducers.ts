import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import Car from './reducers/Car';
import { DefaultState } from './types/Redux';

export const rootReducer = combineReducers({
  Car,
});

export const useTypedSelector: TypedUseSelectorHook<DefaultState> = useSelector;
