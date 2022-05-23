import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {competitionsAPI} from "../../Api/Api";
import 'regenerator-runtime/runtime'

export const competitionSlice = createSlice({
    name: 'competitions',
    initialState: {
        competitions: [],
        gameTypes: [],
        selectedCompetition: [],
        updatedCompetition: [],
    },
    reducers: {
        setSelectedCompetition: (state, action) => {
            state.selectedCompetition = action.payload
        },
        setUpdatedCompetition: (state, action) => {
            state.updatedCompetition = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompetitionsFromServer.fulfilled, (state, action) => {
            state.competitions = action.payload
        })
            .addCase(fetchGameTypesFromServer.fulfilled, (state, action) => {
                state.gameTypes = action.payload
            })
    },


})

export const { setSelectedCompetition, setUpdatedCompetition } = competitionSlice.actions


export const fetchCompetitionsFromServer = createAsyncThunk(
    'competitions/fetchCompetitions',
    async () => {
        const response = await competitionsAPI.allCompetitions()
        return response
    }
)
export const fetchGameTypesFromServer = createAsyncThunk(
    'competitions/fetchGameTypes',
    async () => {
        const response = await competitionsAPI.gameTypes()
        return response
    }
)

export default competitionSlice.reducer
