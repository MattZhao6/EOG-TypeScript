import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './reducer';
import { Provider, createClient, useQuery } from 'urql';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '../../components/Chip';
import { IState } from '../../store';
import { call } from 'redux-saga/effects';

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
});

// const timestampQuery = `
// query {
//     heartBeat
// }
// `;

// const time = () => {

// }


const query = `
query($input: [MeasurementQuery]) {
  getMultipleMeasurements(input: $input) {
    metric
    measurements {
      at
      value
    }
  }
}
`;

const getHeartBeat = (state: IState) => {
  const { heartBeat } = state.heartBeat;
  return {
    heartBeat,
  };
};


const getMultipleMeasurements = (state: IState) => {
  console.log('this is state from mulitpleMeasurement', state.multipleMeasurements);
  // const { flareTemp, waterTemp, casingPressure, oilTemp, tubingPressure, injValveOpen } = state.multipleMeasurements;
  return {
    // flareTemp, waterTemp, casingPressure, oilTemp, tubingPressure, injValveOpen,
  };
};

export default () => {
  return (
    <Provider value={client}>
      <MultipleMeasurements />
    </Provider>
  );
};

const MultipleMeasurements = () => {
  const dispatch = useDispatch();
  const { heartBeat } = useSelector(getHeartBeat);
  const { } = useSelector(getMultipleMeasurements);

  //set the after to 30 min before
  let MS_PER_MINUTE = 60000;
  const afterT = heartBeat - 30 * MS_PER_MINUTE;

  const input = [
    {
      metricName: "flareTemp",
      after: afterT,
    },
    {
      metricName: "waterTemp",
      after: afterT,
    },
    {
      metricName: "casingPressure",
      after: afterT,
    },
    {
      metricName: "oilTemp",
      after: afterT,
    },
    {
      metricName: "tubingPressure",
      after: afterT,
    },
    {
      metricName: "injValveOpen",
        after: afterT,
    }
  ];

  const [result] = useQuery({
    query,
    variables: {
      input,
    },
  });

  const { fetching, data, error } = result;
  useEffect(() => {
    if (error) {
      dispatch(actions.MultipleMeasurementsApiErrorReceived({ error: error.message }));
      return;
    }
    if (!data) return;
    const { getMultipleMeasurements } = data;
    dispatch(actions.MultipleMeasurementsDataRecevied(getMultipleMeasurements));
  }, [dispatch, data, error]);

  if (fetching) return <LinearProgress />;

  return <Chip label={`This is multipleMeasurements page`} />;
};
