import { csrfFetch } from './csrf';




//contains all the actions specific to the session user's info and their Redux reducer.

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

//------Thunk Action Creators

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};


//---------Thunk Action Middleware

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({      //session slice of state if there is a current session user
      credential,               // { user: { id, email, username,  createdAt, updatedAt } }
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};


export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};


export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};


export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};


//-----------Reducer

const initialState = { user: null };  //what session slice of state looks like without session user

const sessionReducer = (state = initialState, action) => {      //by default, no session user
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;