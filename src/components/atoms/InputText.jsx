import React from "react";

export default function InputText({cls,children, ...props}){
    return(
        <input className={"border border-solid-[#DFE3E8] rounded-md px-[20px] py-[12px]  placeholder-[#919EAB] " + cls} {...props}>
            {children}
        </input>
    )
}