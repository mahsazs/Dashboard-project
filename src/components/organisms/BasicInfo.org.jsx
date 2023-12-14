import React from "react";
import GeneralSettingsHeader from "../molecules/GeneralSettingsHeader.mol";
import InputText from "../atoms/InputText";
import BasicInfoInput from "../molecules/BasicInfoInput.mol";
import InputSelect from "../molecules/InputSelect.mol";
import PrimaryBtn from "../atoms/PrimaryBtn";
// import QuIcon from "@/components/atoms/QuIcon";
import QuIcon from "@/components/atoms/QuIcon";
// import QuIcon from "@";

export default function BasicInfo() {
  return (
    <>
      <GeneralSettingsHeader
        title="Basic information"
        content="Update some personal information. Your address will never be publicly available."
      />
      <div className="flex flex-col gap-y-4 mt-6">
        <BasicInfoInput title="Full name">
          <div className="flex flex-row items-center gap-4">
            <InputText
              placeholder="first name"
              type="text"
              name="firstName"
              cls="w-[263px]"
            ></InputText>
            <InputText
              placeholder="last name"
              type="text"
              name="lastName"
              cls="w-[263px]"
              required
            ></InputText>
          </div>
        </BasicInfoInput>

        <BasicInfoInput title="Email">
          <InputText
            placeholder="Email"
            type="email"
            name="email"
            cls="w-[542px]"
          />
        </BasicInfoInput>
        <BasicInfoInput title="Phone" op="(Optional)">
          <InputText
            placeholder="Phone"
            type="tel"
            name="phone"
            cls="w-[542px]"
          />
        </BasicInfoInput>

        <BasicInfoInput title="Location">
          <InputSelect></InputSelect>
        </BasicInfoInput>

        <BasicInfoInput title="Address line 1">
          <InputText
            placeholder="Address"
            type="text"
            name="address1"
            cls="w-[542px]"
          />
        </BasicInfoInput>
        <BasicInfoInput title="Address line 2 " op="(Optional)">
          <InputText
            placeholder="Address"
            type="text"
            name="address2"
            cls="w-[542px]"
          />
        </BasicInfoInput>
        <BasicInfoInput title="Zip code" icon={<QuIcon />}>
          <InputText
            placeholder="Zip code"
            type="text"
            name="ZipCode"
            cls="w-[542px]"
          />
        </BasicInfoInput>

        <BasicInfoInput>
          <div className="flex flex-row justify-start items-center gap-4 w-[542px]">
            <PrimaryBtn cls="w-[133px] h-[42px]">Save Changes</PrimaryBtn>
          </div>
        </BasicInfoInput>
      </div>
    </>
  );
}
