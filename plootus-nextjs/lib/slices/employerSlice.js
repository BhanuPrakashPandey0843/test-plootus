import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const BLUE_PLOOT = '#4361EE'; // Typical Plootus blue

export const strategy_constants = [
  { name: 'Super Conservative', key: '0' },
  { name: 'Conservative', key: '1' },
  { name: 'Moderate', key: '2' },
  { name: 'Aggressive', key: '3' },
  { name: 'Super Aggressive', key: '4' },
];

export const employerSlice = createSlice({
  name: 'employer',
  initialState: {
    employer_selected: '',
    selected_ein: null,
    funds: [],
    loading: false,
    error: null,
  },
  reducers: {
    generalEmployerNew: (state, action) => {
      if (action.payload.employer_selected !== undefined) {
        state.employer_selected = action.payload.employer_selected;
      }
      if (action.payload.funds !== undefined) {
        state.funds = action.payload.funds;
      }
      if (action.payload.selected_ein !== undefined) {
        state.selected_ein = action.payload.selected_ein;
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const { generalEmployerNew, setLoading, setError } = employerSlice.actions;

export const employerNewDataSelector = (state) => state.employer || { employer_selected: '', funds: [] };

export const fetch_allocations = (ent_params, newEmp = false) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    // We are simulating the "unauth" fetch for the static pages
    const response = await axios.get(`https://www.plootus.com/api/employee/getallocationunauth?ein=${ent_params.ein}`);
    
    // The plootus backend returns data directly in response.data
    const allocations = response.data?.allocations || [];
    
    dispatch(generalEmployerNew({
      employer_selected: ent_params.name,
      funds: allocations,
      selected_ein: parseInt(ent_params.ein, 10),
    }));
    
    dispatch(setLoading(false));
  } catch (err) {
    console.error('Error fetching allocations:', err);
    dispatch(setError(err.message));
    dispatch(setLoading(false));
  }
};

export const get_employer_list = (value) => async (dispatch) => {
  try {
    const response = await axios.get(`https://www.plootus.com/api/employee/getemployee?ent_key=${value}`);
    const employees = response.data?.employees || [];
    return employees.slice(0, 10);
  } catch (err) {
    console.error('Error fetching employer list:', err);
    return [];
  }
};

export default employerSlice.reducer;
