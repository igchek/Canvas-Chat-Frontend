import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ChatState {
    userName: string
    socketKey: string
    isActive: boolean
    isBanned: boolean
}

const initialState: ChatState = {
    userName:"",
    socketKey:"",
    isActive:true,
    isBanned:false
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,

    reducers: {
        getChat:(state,action: PayloadAction<ChatState>) => {
            state.userName = action.payload.userName;
            state.isActive = action.payload.isActive;
            state.isBanned = action.payload.isBanned;
            state.socketKey = action.payload.socketKey
        }
    },
})

// Action creators are generated for each case reducer function
export const { getChat } = chatSlice.actions

export default chatSlice.reducer