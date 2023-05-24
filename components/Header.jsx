import React from "react";

function Header() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1512px] w-full fixed top-0 backdrop-blur">
        <ul className=" flex w-full justify-around items-center py-4 tilt-warp text-primary-blue">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>FEATURES</li>
          <li>SECURITY</li>
          <li>DASHBOARD</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
