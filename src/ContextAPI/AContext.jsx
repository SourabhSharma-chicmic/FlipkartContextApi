import {  createContext ,useState } from "react";



export const AContext = createContext();

export const AContextProvider = ({children})=>{

    const [theme,setTheme] = useState(false);
    const [val, setVal] = useState(false);

    return <AContext.Provider value={ [theme,setTheme ,val, setVal]}>

        {children}
    </AContext.Provider>
}

