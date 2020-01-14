import axios from 'axios'


export const getAllTrips = () => async (dispatch) => {
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/trips')

    dispatch(setAllTrips(response.data.trips))
} 

export const setAllTrips = (allTrips) => ({
    type: 'SET_ALL_TRIPS',
    payload: {
        allTrips,
    }
})