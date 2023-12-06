import React from "react";
import GeneralSettingsHeader from "../molecules/GeneralSettingsHeader.mol";
import EditProfileInfoGeneralSettings from "../organisms/EditProfileInfoGeneralSettings.org";
import BasicInfo from "../organisms/BasicInfo.org";



export default function GeneralSettingsPage (){
    return(
        <div className="pt-6 ps-6 pe-6 w-[840px] h-[1064px] border rounded-lg shadow-md ">
         <EditProfileInfoGeneralSettings />
         <BasicInfo></BasicInfo>
        </div>
    )
}