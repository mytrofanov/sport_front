import { configureStore } from '@reduxjs/toolkit';
import competitionReducer from '../features/competitions/competitionSlice'

export default configureStore({
    reducer: {
        competitionsStore: competitionReducer
    },
});
