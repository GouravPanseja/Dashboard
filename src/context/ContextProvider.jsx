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
    const [currentColor ,setCurrentColor]= useState("#03C9D7");
    const [currentMode ,setCurrentMode]= useState("Light");
    const [themeSettings,setThemeSettings] = useState(false);

    const setMode = (event)=>{
        setCurrentMode(event.target.value);
    
        localStorage.setItem('themeMode', event.target.value);  
    }
    const setColor = (color)=>{
        setCurrentColor(color);
        setThemeSettings(false);    // to immediately close the themeSetting window after selecting
        
        localStorage.setItem('colorMode',color);
    }


    return (
        <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,screenSize,setScreenSize, currentColor, currentMode, setCurrentColor, setCurrentMode,setMode, setColor,themeSettings,setThemeSettings}}>
            {children}
        </StateContext.Provider>
    )
}
// we directly exported whatever is returned by useContext() hook here
export const useStateContext = ()=> useContext(StateContext);