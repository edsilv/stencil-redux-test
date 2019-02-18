import { combineReducers } from 'redux';
import { ActionTypes, TypeKeys } from './actions';

interface AppState {
  firstName: string;
  middleName: string;
  lastName: string;
}

const getInitialState = () => {
  return {
    firstName: null,
    middleName: null,
    lastName: null
  }
};

const app = (state: AppState = getInitialState(), action: ActionTypes) => {
  switch (action.type) {
    case TypeKeys.APP_SET_FIRSTNAME: {
      return { ...state, firstName: action.firstName }
    }
    case TypeKeys.APP_SET_MIDDLENAME: {
      return { ...state, middleName: action.middleName }
    }
    case TypeKeys.APP_SET_LASTNAME: {
      return { ...state, lastName: action.lastName }
    }
  }

  return state;
};

export default app;

// Combine feature reducers into a single root reducer
export const rootReducer = combineReducers({
  app,
});
