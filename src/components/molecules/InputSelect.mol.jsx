import React from "react";
import ArrowDropDownIcon from "../atoms/ArrowDropDownIcon";
import InputText from "../atoms/InputText";

export default function InputSelect(){

    return(
        <select className="w-[542px] bg-white border border-solid px-[20px] py-[12px] rounded-md text-[#919EAB]">
            <option value="" disabled selected hidden>Select Country</option>
            <option vlalue='Iran'>Iran</option>
            <option vlalue=''>Us</option>
            <option vlalue=''>France</option>
            
        </select>
    )
}