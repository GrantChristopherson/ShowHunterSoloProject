import { csrfFetch } from './csrf';



const LOAD = 'shows/LOAD';
const REMOVE_SHOW = 'shows/removeShow';
const CREATE_SHOW = 'shows/createShow';


//------Thunk Action Creators

const load = (showList) => {
  return {
    type: LOAD,
    payload: showList,
  };
};

const removeShow = () => {
  return {
    type: REMOVE_SHOW,
  };
};

const createShow = (show) => ({
  type: CREATE_SHOW,
  show
})



//---------Thunk Action Middleware


export const getShows = () => async (dispatch) => {
  const response = await csrfFetch('/api/shows');

  if (response.ok) {
    const showList = await response.json();
    dispatch(load(showList));
  }
};


export const deleteShow = () => async (dispatch) => {
  const response = await csrfFetch('/api/show', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};




//---------- Reducer -----------------




const initialState = { showList: {}, isLoading: true };

const showReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: 

      const newState = { ...state, entries: { ...state.entries } };
      action.showList.forEach(
        (show) => (newState.show[show.id] = show)
      );
      return newState;

    case REMOVE_SHOW:
      return {
        ...state,
        [action.showId]: {
          ...state[action.showId],
          shows: state[action.showId].shows.filter(
            (showId) => showId !== action.showId
          )
        }
      };
    // case CREATE_SHOW:

    //   return { 
    //     ...state,
    //     entries: { ...state.entries, [action.show.id]: action.show }
    //   };
    default:
      return state;
  }
};

export default showReducer;




