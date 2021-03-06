const initialState = {
  currentProfile: null,
  matches: [],
  selectedProfile: {},
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PROFILE_TO_SWIPE':
      const newProfile = action.payload.profile;
      return {...state, currentProfile: newProfile};
    case 'SET_MATCHES':
      const allmatches = action.payload.matches;
      return {...state, matches: allmatches};
    case 'SET_SELECTED_PROFILE':
      const profile = action.payload.SelectedProfile;
      return {...state, selectedProfile: profile}
    default:
      return state
  }
}

export default profiles
