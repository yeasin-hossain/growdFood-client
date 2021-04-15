import { createContext } from 'react';

export const GrowContext = createContext();

export const GrowProvider = ({ children }) => {
    const data = {
        name: 'grow',
    };
    return <GrowContext.Provider value={data}>{children}</GrowContext.Provider>;
};
