 const credentialsReducer = (state = { user: null, accesToken: null }, action) => {
   switch (action.type) {
      case 'SET_AUTH': return { ...state, user: action.user, accesToken: action.accesToken };
    default: return state
   }
}

export default credentialsReducer;