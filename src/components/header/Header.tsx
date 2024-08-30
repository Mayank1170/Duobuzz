"use client";
import React from "react";
import HeaderSearch from "./HeaderSearch";
import HeaderProfile from "./HeaderProfile";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  return (
    <header className="w-full flex px-6 items-center h-fit">
        <HeaderLeft/>
      <div className="w-full h-fit flex flex-row gap-4 items-center justify-end">
        <HeaderSearch />
        <HeaderProfile />
      </div>
    </header>
  );
};

export default Header;
