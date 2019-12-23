import { ADD_USER, FETCH_USER_LIST } from "../Action/Type";

const initialState = {
  userList: []
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state };

    case FETCH_USER_LIST:
      state.userList = payload;
      return { ...state };

    default:
      return state;
  }
};

export default UserReducer;
