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

export const createTrip = (form) => async (dispatch) => {
    const formData = {
        name: form.name,
        date: form.date,
        description: form.description,
        durationInDays: form.durationInDays,
        planet: form.planet,
    }

    const config = {
        headers: {
            'auth': window.localStorage.getItem("token")
        }
    }

    try {
        await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/trips`, formData, config)

        window.alert("Sua viagem foi cadastrada com sucesso!")
    } catch(error) {
        window.alert("Ocorreu um erro ao tentar cadastrar a viagem.")
    }
}

export const setSelectedTripId = (selectedTripId) => ({
    type: 'SET_SELECTED_TRIP',
    payload: {
        selectedTripId,
    }
})


export const getTripDetail = (tripId) => async (dispatch) => {
    const config = {
        headers:{
            'auth': window.localStorage.getItem("token")
        }
    }

    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/igor/trip/${tripId}?=`, config)

    dispatch(setTripDetails(response.data.trip))
}


export const setTripDetails = (tripDetails) => ({
    type: 'SET_TRIP_DETAILS',
    payload: {
        tripDetails,
    }
})