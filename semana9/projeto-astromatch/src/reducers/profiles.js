const initialState = {
  currentProfile: null,
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PROFILE_TO_SWIPE':
      const newProfile = action.payload.profile
      return {...state, currentProfile: newProfile};
    default:
      return state
  }
}

export default profiles
