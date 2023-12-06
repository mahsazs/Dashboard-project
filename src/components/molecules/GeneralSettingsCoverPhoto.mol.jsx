import React from "react";
import ImageIcon from "../../assets/imgs/imageIcon.png"
import SmallBtn from "../atoms/SmallBtn";


export default function GeneralSettingsCoverPhoto(){

    return (
        <div className="flex flex-row justify-between  mt-[31px]">
           
            <span className="text-gray-900 text-[15px] font-normal">Cover photo</span>

            <div className="flex flex-col">
                <div className="w-[551px] h-[99px] border border-solid-[#DFE3E8] flex flex-col items-center justify-center mb-[9px]">
                    <img src={ImageIcon}></img>
                    <p className="text-xs text-gray-500 font-medium">Drag image here. or <a href="#" className="text-[#624BFF] font-medium"> Browse Files</a></p>
                </div>
                <SmallBtn>Change</SmallBtn>
            

            </div>
            
        </div>
    )
}