const initialState = {
    allTrips: [],
}

const trips = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ALL_TRIPS':
            const tripList = action.payload.allTrips;
            return {...state, allTrips: tripList};
        default:
            return state;
    }
}


export default trips;