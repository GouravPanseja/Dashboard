import React,{useEffect,} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css"

import {Navbar, Footer,Sidebar,ThemeSettings} from "./components/index.jsx";
import { Ecommerce,Orders,Calendar,Employee,Stacked,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorMapping,ColorPicker,Editor, Line } from "./pages/index";
import { useStateContext } from "./context/ContextProvider";



export default function App(){

    const {activeMenu,themeSettings,setThemeSettings,currentColor,currentMode} = useStateContext(); // called the func to call a func to return whatever returned from useContext() hook for that context api




    return(
        <div className={`${currentMode === 'Dark' ? "dark" : ""}`}>
            <BrowserRouter>
                <div className="flex  relative dark:bg-main-dark-bg bg-[#fafbfb]">
                    {/* settings button */}
                    <div className="fixed right-4 bottom-4 " style={{zIndex:'1000'}}>
                        <TooltipComponent content="Settings" position="TopCenter">

                            <button 
                                type="button" 
                                className="text-3l p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" 
                                style={{background:currentColor,borderRadius:'50%'}}
                                onClick={()=> setThemeSettings(true)}
                            >
                                    <FiSettings/>
                            </button>

                        </TooltipComponent>
                    </div>
                    
                    {/* show or not show the sidebar */}
                    {activeMenu ? (
                        <div className="w-72  fixed sidebar dark:bg-secondary-dark-bg ">
                            <Sidebar/>
                        </div>
                    ):(
                        // collapse the sidebar if false
                        <div className="w-0 dark:bg-secondary-dark-bg">
                            <Sidebar/>
                        </div>
                    )
                    }
                    {/* // if activemenu is true keep it shifted to right else not */}
                     <div className={`dark:bg-main-dark-bg  min-h-screen w-full  ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>          
                        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                            <Navbar/>
                        </div>
                    

                        {/* // routing div */}
                        <div>
                        { 
                            themeSettings && <ThemeSettings/> 
                        }
                            
                            <Routes>
                                <Route path="/" element={<Ecommerce/>}/>
                                <Route path="/ecommerce" element={<Ecommerce/>}/>

                                {/* pages */}
                                <Route path="/orders" element={<Orders/>}/>
                                <Route path="/employees" element={<Employee/>}/>
                                <Route path="/customers" element={<Customers/>}/>

                                {/* apps */}
                                <Route path="/kanban" element={<Kanban/>} />
                                <Route path="/editor" element={<Editor/>}/>
                                <Route path="/calendar" element={<Calendar/>}/>
                                <Route path="/color-picker" element={<ColorPicker/>}/>

                                {/* charts */}
                                <Route path="/line" element={<Line/>}/>
                                <Route path="/area" element={<Area/>}/>
                                <Route path="/bar" element="bar"/>
                                <Route path="/pie" element="pie"/>
                                <Route path="/financial" element="financial"/>
                                <Route path="/color-mapping" element="color-mapping"/>
                                <Route path="/pyramid" element="pyramid"/>
                                <Route path="/stacked" element="stacked"/>
                        

                            </Routes>
                        </div>

                    </div>


                </div>
            </BrowserRouter>
        </div>
    ) 
}

