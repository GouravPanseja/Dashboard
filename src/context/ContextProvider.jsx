import React, {createContext, useContext,useState} from "react";

const StateContext = createContext();


const initialState ={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider = ({children})=>{


    const [activeMenu,setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);

    return (
        <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,screenSize,setScreenSize}}>
            {children}
        </StateContext.Provider>
    )
}
// we directly exported whatever is returned by useContext() hook here
export const useStateContext = ()=> useContext(StateContext);