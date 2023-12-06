import React from "react"
import ManImage from "../../assets/imgs/man.png";
import SmallBtn from "../atoms/SmallBtn";

export default function GeneralSettingsAvatar (){

    const handleChangeClick = () => {
        
      };
      
    const handleRemoveClick = () => {
        
    };
    return (
        <div className="flex flex-row items-center mt-6">
            <span className="text-gray-900 text-[15px] font-normal w-[240px]">Avatar</span>
            <div className=" flex flex-row flex-start gap-2 items-center">
                <img src={ManImage} className="rounded-full  mr-5" ></img>
                <SmallBtn onClick={handleChangeClick} >Change</SmallBtn>
                <SmallBtn onClick={handleRemoveClick} className="ml-1">Remove</SmallBtn>
            </div>
        </div>
    )
         
}