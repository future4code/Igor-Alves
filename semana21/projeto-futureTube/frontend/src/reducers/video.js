const initialState = {
  allVideos: [],
  userVideos: [],
  videoDetails: null
}

const video = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ALL_VIDEOS':
      const allVideos = action.payload.allVideos
      return {...state, allVideos: allVideos}
    case 'SET_USER_VIDEOS':
      const userVideos = action.payload.userVideos
      return {...state, userVideos: userVideos}
    case 'SET_VIDEO_DETAILS':
      const videoDetails = action.payload.videoDetails
      return {...state, videoDetails: videoDetails}
    default:
      return state
  }
}


export default video;