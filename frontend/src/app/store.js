import{ configureStore } from '@reduxjs/toolkit'
import authReducer  from '../features/auth/authSlice'
import profileReducer from '../features/profile/profileSlice'
import uploadReducer from '../features/upload/uploadSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        upload: uploadReducer
    },
})