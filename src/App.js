import { ToastContainer } from 'react-toastify';
import RouterWrapper from './routes/RouterWrapper';
import Title from './views/Title/Title';

function App() {
    return (
        <>
            <Title />
            <RouterWrapper />
            <ToastContainer />
        </>
    );
}

export default App;
