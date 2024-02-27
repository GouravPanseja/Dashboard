import React from "react";
import {Link,NavLink} from "react-router-dom";
import {SiShopware} from "react-icons/si";
import {MdOutlineCancel} from "react-icons/md";
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {links} from '../data/dummy';
import  {useStateContext} from "../context/ContextProvider";

const Sidebar = ()=>{
    const {activeMenu,setActiveMenu,screenSize} = useStateContext();

    const activeLinkStyle = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-green-600 text-md m-2";
    const normalLinkStyle = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
    
    const closeSidebar =()=>{                   // closes the sidebar if it is open and the device is smaller
        if(activeMenu && screenSize <= 900){
            setActiveMenu(false);
        }
    }

    return(
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">  
        {
            activeMenu && (<>
                <div className="flex justify-between items-center">
                    {/* logo part */}
                    <Link to="/" onClick = {closeSidebar}  className=" items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-wihte text-slate-900">
                        <SiShopware/> 
                        <span> Shoppy </span>
                    </Link>

                    <TooltipComponent content="menu" position="BottomCenter">
                        <button type="button" onClick={()=>{setActiveMenu((prevState) => !prevState)}} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                            <MdOutlineCancel/>
                        </button>
                    </TooltipComponent>
                </div>
                
                {/* // all navigation links of sidear */}
                <div className="mt-10">
                    {
                        links.map((item)=>(
                            <div key={item.title}>
                                <p className="text-gray-400 m-3 mt-4        uppercase">
                                    {item.title}
                                </p>
                                {
                                    item.links.map((link)=>(

                                        <NavLink to={`/${link.name}`} key =  {link.name} onClick={closeSidebar} className={({isActive})=> isActive ? activeLinkStyle : normalLinkStyle}>
                                            {link.icon}
                                            <span className="capitalize">{link.name}</span>
                                        </NavLink>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </>)
        }
        </div>
    )
}

export default Sidebar;