import {
  GET_EVENTS,
  LIKE_EVENT,
  ERR_LIKE_EVENT,
  DSILIKE_EVENT,
  ERR_DSILIKE_EVENT,
  GET_EVENT_BY_Id,
  SUCESS_ADD_EVENT,
  GET_EVENTS_USER,
  SAVE_EVENT,
  EDIT_EVENT,
  DELETE_EVENT
} from "../actions/types";
const initialState = {
  allEvents: [],
  event: {},
  err: [],
  events: [],
  EventsAdherent: [],
  likes: 0,
  saved:[]
};
const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        allEvents: action.payload,
      };
    case LIKE_EVENT:
      return {
        ...state,
        likes: action.payload,
      };
    case ERR_LIKE_EVENT:
      return {
        ...state,
        err: state.err.concat(action.payload),
      };
    case DSILIKE_EVENT:
      return {
        ...state,
        dislikes: action.payload,
      };
    case ERR_DSILIKE_EVENT:
      return {
        ...state,
        err: state.err.concat(action.payload),
      };
    case GET_EVENT_BY_Id:
      return {
        ...state,
        event: action.payload,
      };

    case SUCESS_ADD_EVENT:
      return({
        ...state,
       events: action.payload & alert("l'événement a été ajouté") & window.location.reload(true)
      });
    case GET_EVENTS_USER:
      return {
        ...state,
        EventsAdherent: action.payload,
      };
  case SAVE_EVENT:
    return{
      ...state,
      saved:action.payload
    }
    case EDIT_EVENT:
      return{
        ...state,
        EventsAdherent:state.EventsAdherent.map(el =>el._id===action.payload._id ? action.payload : el )
      }
      case DELETE_EVENT:
  return{
    ...state,
        EventsAdherent:state.EventsAdherent.filter(el=>el._id !== action.payload)}
  
    default:
      return state;
  }
  
};

export default Reducer1;
