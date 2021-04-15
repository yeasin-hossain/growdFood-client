import dotenv from 'dotenv';
import RouterWrapper from './routes/RouterWrapper';

dotenv.config();
function App() {
    console.log(process.env.REACT_APP_NAME);
    return (
        <>
            <RouterWrapper />
        </>
    );
}

export default App;
