import React from "react";
import SideBarItem from "../molecules/SideBarItem.mol";
import { routes } from "../templates/SideBarConfig";
import ArrowDropDownIcon from "../atoms/ArrowDropDownIcon";

export default function SideBar() {
  return (
    <div className="w-[256px] h-screen bg-[#212B36] p-6 flex flex-col gap-4">
      <span className="text-[#FFF] text-[26px] font-black">Dash UI</span>

      <div>
        <div className="flex flex-col gap-y-4">
          {routes.map((route) => (
            <SideBarItem 
              icon={route.icon}
              title={route.title}
              childs={route.childs}  
              key={route.url}
              url={route.url}
              active={window.location.pathname === route.url}
            >
              <ArrowDropDownIcon cls='w-[16px] h-[16px]'/>
            </SideBarItem>
          ))}

          {/* {routes.map((route) => {
//                  return 
                        <SideBarOrg
//                          icon={route.icon}
//                          title={route.title}
//                          childs={route.childs}
//                      />
//                                        }
//            ))} */}
        </div>
      </div>
    </div>
  );
}
