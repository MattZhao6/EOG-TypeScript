import { reducer as weatherReducer } from '../Features/Weather/reducer';
import { reducer as heartBeatReducer } from '../Features/heartBeat/reducer';
import { reducer as multipleMeasurementsReducer } from '../Features/MultipleMeasurements/reducer';

export default {
  weather: weatherReducer,
  heartBeat: heartBeatReducer,
  multipleMeasurements: multipleMeasurementsReducer,
};
