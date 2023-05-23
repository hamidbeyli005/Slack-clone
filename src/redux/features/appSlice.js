import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    channelId: "FleCR25Z7xM5pHLK2m4R",
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterChannel: (state,action) => {
      console.log(action.payload.channelId)
      state.channelId =action.payload.channelId;

    },
   
  },
})

// Action creators are generated for each case reducer function
export const { enterChannel  } = appSlice.actions;

export default appSlice.reducer