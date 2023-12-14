import React from "react";
import { useNavigate } from "react-router-dom";

function SideBarItem({ active, title, icon, url, childs = [],children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col cursor-pointer hover:text-white ${
        active 
        ? "text-white" 
        : "text-[#919EAB]"
      }`}
    >
      <div className="flex flex-row justify-between items-center mb-2">
        <div className="flex items-center px-2 ">
          {icon}
          {title}
        </div>
        {children}
      </div>

        {childs.map((item) => {
          return (
            <li className="list-disc ml-11 gap-y-2">
              <SideBarItem
              title={item.title}
              key={item.url}
              url={item.url}
              active={window.location.pathname === item.url}
            >
            </SideBarItem>

            </li>
                      )
        })}
       
    </div>
  );
}

export default SideBarItem;
