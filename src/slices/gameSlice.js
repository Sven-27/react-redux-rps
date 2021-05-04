import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  userHand: "",
  computerHand: "",
}

const gameSlice = createSlice({name: "game", 
  initialState, 
  reducers: 
  {setUserHand: (state, action) => {
     state.userHand = action.payload
},
setComputerHand: (state, action) => {
    state.computerHand = action.payload
}
}})

export const {setUserHand, setComputerHand } = gameSlice.actions
export const selectUserHand = state => state.game.userHand
export const selectComputerHand = state => state.game.computerHand
export default gameSlice.reducer