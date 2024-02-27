import React, {useEffect} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg"
import {Cart, Chat,Notification,UserProfile,userProfile} from ".";
import { useStateContext } from "../context/ContextProvider";



const NavButton =({title, customFunc, icon, color, dotColor})=>(
    <TooltipComponent content= {title} position="BottomCenter">
        <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray ">
            <span style={{background:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
            
                {icon}
            
        </button>
    </TooltipComponent>
)

const Navbar = ()=>{
    const {activeMenu, setActiveMenu,isClicked, setIsClicked,screenSize, setScreenSize} = useStateContext(); 
    
    const handleResize = ()=>{

        setScreenSize(window.innerWidth);
        
    }

    console.log(screenSize);

    useEffect(()=>{

        window.addEventListener('resize', handleResize);    // set screenSize on further resizing

        handleResize(); // to set the screenSize after the first render

        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    },[])   // do above thing only at first render

    useEffect(()=>{     // to keep the sidebar opened or closed when window is resized in perticular range

        if(screenSize >= 900){
            setActiveMenu(true);
        }
        else{
            setActiveMenu(false);
        }

    },[screenSize])
    
    
    const handleClick = (clicked) => {

      
        const copyIsClicked = { ...isClicked };
    
        console.log(isClicked, clicked);

        for (const key in copyIsClicked) {      // mark the clicked one as true and others as false

            if(key === clicked){
                copyIsClicked[key] = true;
            }
            else copyIsClicked[key] = false;

        }
    
       
        setIsClicked(copyIsClicked);
    };

    return(
        <div className = "flex justify-between p-3 md:mx-6 relative ">
            <NavButton title="Menu" customFunc={() =>setActiveMenu((prevState)=> !prevState)} color="blue" icon={<AiOutlineMenu/>}/>

            <div className="flex">
                <NavButton title="Cart" customFunc={() => handleClick('cart')} color="blue" icon={<FiShoppingCart/>}/>
                <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color="blue" icon={<BsChatLeft/>}/>
                <NavButton title="Notification" dotColor="#03C9D7" customFunc={() => handleClick('notification')} color="blue" icon={<RiNotification3Line/>}/>
            

                <TooltipComponent content="Profile" position="BottomCenter">
                    <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={()=> handleClick('userProfile')}>
                        <img src={avatar} className="rounded-full w-8 h-8" alt="profile"/> 
                        <p>
                            <span className="text-gray-400 text-14">Hi, </span> {' '}
                            <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14"/>
                    </div>
                </TooltipComponent>

                {isClicked.cart && <Cart/>}
                {isClicked.chat && <Chat/>}
                {isClicked.notification && <Notification/>}
                {isClicked.userProfile && <UserProfile/>}
            </div>
        </div>


    )
}

export default Navbar;