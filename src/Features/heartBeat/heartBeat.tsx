import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './reducer';
import { Provider, createClient, useQuery } from 'urql';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '../../components/Chip';
import { IState } from '../../store';

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
});

const query = `
query {
    heartBeat
}
`;

const getHeartBeat = (state: IState) => {
  const { heartBeat } = state.heartBeat;
  return {
    heartBeat,
  };
};

export default () => {
  return (
    <Provider value={client}>
      <HeartBeat />
    </Provider>
  );
};

const HeartBeat = () => {
  const dispatch = useDispatch();
  const { heartBeat } = useSelector(getHeartBeat);

  const [result] = useQuery({query});

  const { fetching, data, error } = result;
  useEffect(() => {
    if (error) {
      dispatch(actions.heartBeatApiErrorReceived({ error: error.message }));
      return;
    }
    if (!data) return;
    dispatch(actions.heartBeatDataRecevied(data));
  }, [dispatch, data, error]);

  if (fetching) return <LinearProgress />;

  return <Chip label={`heartBeat in ${heartBeat}`} />;
};
