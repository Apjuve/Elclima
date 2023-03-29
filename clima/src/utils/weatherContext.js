import React, { useContext } from 'react';
export const weatherContext = React.createContext();
export const viewWeather = () => useContext(weatherContext);

export default function weatherProvider(props) {

    const initialState = {};

    return <weatherContext.Provider value = {{initialState}} {...props} />;

}
