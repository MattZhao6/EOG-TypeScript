import { createSlice, PayloadAction } from 'redux-starter-kit';

export type Timestamp = {
  heartBeat: number;
};

export type ApiErrorAction = {
  error: string;
};

const initialState = {
    heartBeat: 0,
};


const slice = createSlice({
  name: 'heartBeat',
  initialState,
  reducers: {
    heartBeatDataRecevied: (state, action: PayloadAction<Timestamp>) => {
      console.log("this is heartBeat from reducer", action.payload);
      const { heartBeat } = action.payload;
      state.heartBeat = heartBeat;
    },
    heartBeatApiErrorReceived: (state, action: PayloadAction<ApiErrorAction>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
