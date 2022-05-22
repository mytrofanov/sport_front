import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {competitionsAPI} from "../../Api/Api";
import 'regenerator-runtime/runtime'

export const competitionSlice = createSlice({
    name: 'competitions',
    initialState: {
        competitions: [],
        gameTypes: [],
        selectedCompetition: null
    },
    reducers: {
        setSelectedCompetition: (state, action) => {
            state.selectedCompetition = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCompetitionsFromServer.fulfilled, (state, action) => {
            state.competitions = action.payload
        })
    },
})

export const { setSelectedCompetition } = competitionSlice.actions


export const fetchCompetitionsFromServer = createAsyncThunk(
    'competitions/fetchFood',
    async () => {
        const response = await competitionsAPI.allCompetitions()
        return response
    }
)

export default competitionSlice.reducer
