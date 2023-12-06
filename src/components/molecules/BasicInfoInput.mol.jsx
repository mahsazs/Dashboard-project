import React from "react";
import InputText from "../atoms/InputText";

export default function BasicInfoInput({title,op,icon,cls,children}){
    return(
    <div className={"flex flex-row justify-between items-center " + cls}>
        <span className="flex">{title}<p className="text-[#919EAB]">{op} {icon}</p></span>
        {children}
    </div>
    )
}