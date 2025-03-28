import { createSlice } from '@reduxjs/toolkit';

const querySlice = createSlice({
  name: 'query',
  initialState: {
    query: '',
    history: [],
    results: null,
    loading: false,
    error: null,
  },
  reducers: {
    submitQuery: (state, action) => {
      state.loading = true;
      state.error = null;
      state.query = action.payload;
    },
    setQueryResult: (state, action) => {
      state.loading = false;
      state.results = action.payload;
      state.history.unshift(state.query);
    },
    setQueryError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { submitQuery, setQueryResult, setQueryError } = querySlice.actions;
export default querySlice.reducer;