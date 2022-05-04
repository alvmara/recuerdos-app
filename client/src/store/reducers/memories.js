const memoriesReducer = (state = { memories: [] }, action) => {
   switch (action.type) {
      case 'ADD_MEMORY': return { ...state, memories: [action.memory, ...state.memories] };
      case 'SET_MEMORIES': return { ...state, memories: action.memories };
    default: return state
   }
}

export default  memoriesReducer;