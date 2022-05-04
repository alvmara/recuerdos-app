 const credentialsReducer = (state = { user: null, accessToken: null }, action) => {
   switch (action.type) {
      case 'SET_AUTH': return { ...state, user: action.user, accessToken: action.accessToken };
    default: return state
   }
}

export default credentialsReducer;