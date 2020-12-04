import { spawn } from 'redux-saga/effects';
import weatherSaga from '../Features/Weather/saga';
import heartBeatSaga from '../Features/heartBeat/saga';
import multipleMeasurementsReducerSaga from '../Features/MultipleMeasurements/saga';

export default function* root() {
  yield spawn(weatherSaga);
  yield spawn(heartBeatSaga);
  yield spawn(multipleMeasurementsReducerSaga);
}
