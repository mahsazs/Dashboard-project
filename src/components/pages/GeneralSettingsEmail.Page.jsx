import React from "react";
import GeneralSettingsHeader from "../molecules/GeneralSettingsHeader.mol";
import BasicInfoInput from "../molecules/BasicInfoInput.mol";
import InputText from "../atoms/InputText";
import PrimaryBtn from "../atoms/PrimaryBtn";

export default function GeneralSettingsEmail(){

    return(
        <div className="flex flex-col gap-y-4 pt-6 ps-6 pe-6 mt-6 w-[840px] h-[238px] border rounded-lg shadow-md ">
            
            <GeneralSettingsHeader title="Email" content="Your current Primary email address is " email="dashprops@example.com"/>    
           
            <BasicInfoInput title="New email address">
                    <InputText placeholder="Email" type="email" name="email" cls="w-[542px]" />
            </BasicInfoInput>

            <BasicInfoInput>
                    <div className="flex flex-row justify-start items-center gap-4 w-[542px]">
                        <PrimaryBtn cls="w-[133px] h-[42px]">Save Changes</PrimaryBtn>
                    </div>
                </BasicInfoInput>

                
            </div>
        
    )}