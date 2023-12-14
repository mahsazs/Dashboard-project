import React from "react";
import SideBar from "../organisms/SideBar.org";
import Header from "../organisms/Header.org";

function Layout({ cls , children }) {
  return (
    <div className={"w-[1400px] h-[full] flex justify-between" + cls}>
      <SideBar />
      <div className="container w-[1144]">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
