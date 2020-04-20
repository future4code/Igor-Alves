const initialState = {
  visibleMenu: false
}

const user = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_MENU_VISIBLE':
      const revertMenu = !state.visibleMenu
      return {...state, visibleMenu: revertMenu}
    default:
      return state
  }
}


export default user;