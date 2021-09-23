import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

const tron = Reactotron.configure()
  .useReactNative()
  .use(
    reactotronRedux({
      isActionImportant: action => action.type === 'repo.receive',
    }),
  )
  .connect();

tron.clear();

console.tron = tron;

export default tron;
