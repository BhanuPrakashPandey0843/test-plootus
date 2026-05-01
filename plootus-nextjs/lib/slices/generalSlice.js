import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employer: {
    employer_list: [],
    funds: [],
    value: "",
    visible: false,
    showFunds: false,
    employer_selected: false,
    funds_load: false,
    search_loading: false,
  },
  futureExpenses: {
    total: null,
    listData: null,
    currentTotal: null,
    futureTotal: null,
    graphData: null,
    inflation: 2,
  },
  employerNew: {
    funds: [],
    employer_selected: "",
    selected_ein: null,
  },
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setGeneralEmployer: (state, action) => {
      state.employer = { ...state.employer, ...action.payload };
    },
    setFutureExpenses: (state, action) => {
      state.futureExpenses = { ...state.futureExpenses, ...action.payload };
    },
    setEmployerNew: (state, action) => {
      state.employerNew = { ...state.employerNew, ...action.payload };
    },
    resetGeneral: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase('GENERAL_EMPLOYER', (state, action) => {
        state.employer = { ...state.employer, ...action.payload };
      })
      .addCase('GENERAL_FUTURE_EXPENSES_TABLE', (state, action) => {
        state.futureExpenses = { ...state.futureExpenses, ...action.payload };
      })
      .addCase('GENERAL_EMPLOYER_NEW', (state, action) => {
        state.employerNew = { ...state.employerNew, ...action.payload };
      })
      .addCase('RESET_GENERAL', (state) => {
        return initialState;
      });
  },
});

export const { setGeneralEmployer, setFutureExpenses, setEmployerNew, resetGeneral } = generalSlice.actions;
export default generalSlice.reducer;
