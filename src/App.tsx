import { CtrlMenu } from './CtrlMenu';

alt.on('c:f:testEndpoint', (payload: string) => {
    alt.emit('f:c:testEndpoint', `Yea, ${payload}`);
});

function App() {
    return <CtrlMenu />;
}

export default App;
