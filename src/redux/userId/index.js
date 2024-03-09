const initialState = {
    users: {
      id: '',
    }
  
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USERID':
        return {
          ...state,
          users: {
            ...state.users,
            id: action.payload.userId,
          },
        };
  
      case 'CLEAR_USERID':
        return {
          initialState,
        };
        
      default:
        break;
    }
    return state;
  };
  
  export default userReducer;
  