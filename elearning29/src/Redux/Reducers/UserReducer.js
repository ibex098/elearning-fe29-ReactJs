import { ADD_USER, LOGIN, LOGOUT } from "../Action/Type";

const initialState = {
  userList: [],
  credentials: null //biến thông tin đăng nhập của người dùng
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return { ...state };

    case LOGIN:
      state.credentials = payload;
      return { ...state };

    case LOGOUT:
      return { ...state };

    default:
      return state;
  }
};

export default UserReducer;
