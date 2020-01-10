import axios from 'axios'


export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/clear')
}


export const setProfileToSwipe = (profile) => ({
	type: 'SET_PROFILE_TO_SWIPE',
	payload: {
		profile,
	}
})


export const getProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/person');
	
	dispatch(setProfileToSwipe(response.data.profile));
}


export const chooseProfile = (id, choice) => async (dispatch) => {
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/choose-person', {id,choice})

	dispatch(getProfileToSwipe())
}


export const setMatches = (matches) => ({
	type: 'SET_MATCHES',
	payload: {
		matches,
	}
})


export const getMatches = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor/matches')

	dispatch(setMatches(response.data.matches))
}