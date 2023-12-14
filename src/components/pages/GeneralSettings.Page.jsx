import React from "react";
import GeneralSettingsHeader from "../molecules/GeneralSettingsHeader.mol";
import EditProfileInfoGeneralSettings from "../organisms/EditProfileInfoGeneralSettings.org";
import BasicInfo from "../organisms/BasicInfo.org";
import GeneralSettingsEmail from "./GeneralSettingsEmail.Page";
import ChangeEmailPass from "./ChangeEmailPass.Page";
import Layout from "../templates/Layout";

export default function GeneralSettingsPage() {
  return (
    <Layout>
      <div className="ml-[308px]">
        <div className="pt-6 ps-6 pe-6 w-[840px] h-[1064px] border rounded-lg shadow-md ">
          <EditProfileInfoGeneralSettings />
          <BasicInfo></BasicInfo>
        </div>
        <GeneralSettingsEmail></GeneralSettingsEmail>

        <ChangeEmailPass></ChangeEmailPass>
      </div>
    </Layout>
  );
}
