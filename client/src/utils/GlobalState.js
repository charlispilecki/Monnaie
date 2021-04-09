import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_TASK,
  REMOVE_TASK,
  UPDATE_TASKS,
  ADD_TASK,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_TASK:
    return {
      ...state,
      currentTask: action.task,
      loading: false
    };

  case UPDATE_TASKS:
    return {
      ...state,
      tasks: [...action.tasks],
      loading: false
    };

  case ADD_TASK:
    return {
      ...state,
      tasks: [action.task, ...state.tasks],
      loading: false
    };

  case REMOVE_TASK:
    return {
      ...state,
      tasks: state.tasks.filter((task) => {
        return task._id !== action._id; 
      })
    };

  // case ADD_FAVORITE:
  //   return {
  //     ...state,
  //     favorites: [action.post, ...state.favorites],
  //     loading: false
  //   };

  // case UPDATE_FAVORITES:
  //   return {
  //     ...state,
  //     favorites: [...state.favorites],
  //     loading: false
  //   };

  // case REMOVE_FAVORITE:
  //   return {
  //     ...state,
  //     favorites: state.favorites.filter((post) => {
  //       return post._id !== action._id; 
  //     })
  //   };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    tasks: [],
    currentTask: {
      _id: 0,
      description: "",
      dueDate: ""
    }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
