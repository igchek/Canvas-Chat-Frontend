import {configureStore } from '@reduxjs/toolkit'
import ChatSlice from "@/store/slices/chat-slice";


const store = configureStore({
    reducer:{
        chat: ChatSlice,
    },
    devTools:true
})

export default store


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch