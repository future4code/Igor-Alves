const initialState = {
    allTrips: [],
    selectedTripId: "",
    tripDetails: {},
}

const trips = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ALL_TRIPS':
            const tripList = action.payload.allTrips;
            return {...state, allTrips: tripList};
        case 'SET_SELECTED_TRIP':
            const tripId = action.payload.selectedTripId;
            return {...state, selectedTripId: tripId}    
        case 'SET_TRIP_DETAILS':
            const tripDetails = action.payload.tripDetails;
            return {...state, tripDetails: tripDetails}
        default:
            return state;
    }
}


export default trips;