import React, { useState, useEffect } from "react";
import Image from "next/image";
import { logoName, menu } from "../assets/images";

export default function Navbar(props) {
  return (
    <header>
      <nav className={"navbar"} style={{display:'flex', justifyContent:'space-between'}}>
        <div className="header-logo">
          <Image
            src={logoName}
			height={90}
			width={125}
            className="logo"
            alt="traders guide | stock market advisory"
          />
        </div>
			<ul>
				<li>
					Home
				</li>
				<li>
					About Us
				</li>
				<li>
					Courses
				</li>
				<li>
					Free Webinar
				</li>
				<li>
					Contact Us
				</li>
			</ul>
      </nav>
    </header>
  );
}
