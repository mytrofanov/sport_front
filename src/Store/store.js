import { configureStore } from '@reduxjs/toolkit';
import foodReducer from '../features/competitions/competitionSlice'

export default configureStore({
    reducer: {
        competitionsStore: foodReducer
    },
});
