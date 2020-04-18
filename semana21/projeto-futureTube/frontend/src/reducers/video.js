const initialState = {
  allVideos: []
}

const video = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ALL_VIDEOS':
      const allVideos = action.payload.allVideos
      return {...state, allVideos: allVideos}
    default:
      return state
  }
}


export default video;