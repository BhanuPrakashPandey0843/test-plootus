import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sliderOptions: null,
  openingBalance: null,
  strategyIndex: null,
  expense_home: null,
  socialSecurity: [],
  graph: {
    assets: [],
    gap: [],
    future: [],
    results: {
      retirementAssests: 0,
      retirementGap: 0,
      futureExpenses: 0,
      retireReturns: 0,
    },
    flag: null,
  },
  editVisible: false,
};

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    setGeneralGraph: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setGraphResults: (state, action) => {
      state.graph = {
        ...state.graph,
        ...action.payload.graph,
        results: {
          ...state.graph.results,
          ...action.payload.results,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase('GENERAL_GRAPH', (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase('GRAPH_GRAPH_RESULTS', (state, action) => {
        state.graph = {
          ...state.graph,
          ...action.payload.graph,
          results: {
            ...state.graph.results,
            ...action.payload.results,
          },
        };
      });
  },
});

export const { setGeneralGraph, setGraphResults } = graphSlice.actions;
export default graphSlice.reducer;
