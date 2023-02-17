import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

declare global {
    interface Console {
        tron: any;
    }
};

const reactotron = Reactotron.configure({ host: '192.168.15.2', name: 'CinePlus' })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

const yeOldeConsoleLog = console.log;
console.log = (...args) => {
    yeOldeConsoleLog(...args);
    Reactotron.display({
        name: 'APP DEBUG',
        value: args,
        preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
    });
};

export default reactotron;
