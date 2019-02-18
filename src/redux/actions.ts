export enum TypeKeys {
  // Won't match anything
  NULL = 'NULL',
  APP_SET_FIRSTNAME = 'APP_SET_FIRSTNAME',
  APP_SET_MIDDLENAME = 'APP_SET_MIDDLENAME',
  APP_SET_LASTNAME = 'APP_SET_LASTNAME'
};

export interface NullAction {
  type: TypeKeys.NULL
}

export interface AppSetFirstNameAction {
  type: TypeKeys.APP_SET_FIRSTNAME,
  firstName: string;
}

export const appSetFirstName = (firstName: string) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_FIRSTNAME,
    firstName: firstName
  })
};

export interface AppSetMiddleNameAction {
  type: TypeKeys.APP_SET_MIDDLENAME,
  middleName: string;
}

export const appSetMiddleName = (middleName: string) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_MIDDLENAME,
    middleName: middleName
  })
};

export interface AppSetLastNameAction {
  type: TypeKeys.APP_SET_LASTNAME,
  lastName: string;
}

export const appSetLastName = (lastName: string) => async (dispatch, _getState) => {
  return dispatch({
    type: TypeKeys.APP_SET_LASTNAME,
    lastName: lastName
  })
};

export type ActionTypes =
  | NullAction
  | AppSetFirstNameAction
  | AppSetMiddleNameAction
  | AppSetLastNameAction
;
