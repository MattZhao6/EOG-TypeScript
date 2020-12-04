import { createSlice, PayloadAction } from 'redux-starter-kit';

export type MultipleMeasurements = {
  measurements: [],
  metric: any,
};

export type ApiErrorAction = {
  error: string;
};

const initialState = [
  {
    measurements: [],
    metric: '',
  },
];


const slice = createSlice({
  name: 'multipleMeasurements',
  initialState,
  reducers: {
    MultipleMeasurementsDataRecevied: (state, {payload}: PayloadAction<MultipleMeasurements>) => {
      // const getMultipleMeasurements  = action.payload;
      // console.log("this is from reducer", getMultipleMeasurements);
      // const {} = 
    },
    MultipleMeasurementsApiErrorReceived: (state, action: PayloadAction<ApiErrorAction>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
