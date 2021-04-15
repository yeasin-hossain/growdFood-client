import React, { useContext } from 'react';
import { GrowContext } from '../../context/GrowContext';

function Home() {
    const { name } = useContext(GrowContext);
    return <div>{name}</div>;
}

export default Home;
