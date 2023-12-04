"use client";

import { useState } from "react";
import { ThemeButton } from "@/components/ThemeButton";

export default function Navbar() {
  let [hamburgerOpened, setHamburgerOpened] = useState(false);

  return (
    <div className="bg-secondary lg:h-[82px] h-[48px] w-[screen] font-link lg:text-[20px] text-[14px]">
      <img
        src="/caucus_logo_bw.png"
        className="
        absolute
        lg:w-[60px] w-[35px]
        lg:h-[60px] h-[35px]
        lg:top-[41px] top-[24px]
        lg:left-[25px] left-[11px]
        -translate-y-1/2"
      />

      <a
        className="absolute text-[#FFFFFF]
      lg:left-[110px] left-[50vw]
      lg:translate-x-0 -translate-x-1/2
      lg:top-[41px] top-[24px]
      -translate-y-1/2 "
      >
        Stuyvesant Senior Caucus
      </a>

      {/*normal*/}
      <div
        className="
        lg:flex
        hidden
        
        absolute right-[35px] top-[41px] -translate-y-1/2
         
        text-[#CCB1F8] child:ml-[35px]"
      >
        {/*<a>Announcements</a>
        <a>Resources</a>
        <a>Events</a>
        <a>Team</a>
        <a>Calendar</a>*/}
        <ThemeButton />
        <a href="/">Home</a>
        <a href="/team">Team</a>
        <a href="/opportunities">Opportunities</a>
        <a href="https://docs.google.com/document/d/1ltKbFo0SDqg417J16mmhc8D6DiNpYxOr6op9mmxx0aA/edit?usp=sharing">Course Selection Guide</a>
      </div>

      {/*hamburger*/}
      <div
        aria-checked={hamburgerOpened}
        className="
        lg:hidden
        flex flex-col

        pointer-events-none opacity-0 
        aria-checked:pointer-events-auto aria-checked:opacity-100
        transition-opacity ease-out duration-[200ms]

        z-[100]

        text-white
        absolute

        child:h-[8vw] child:w-screen child:bg-tertiary child-hover:bg-tertiary child:drop-shadow
        
        child:child:left-[50vw] child:child:-translate-x-1/2 child:child:-translate-y-1/2"
      >
        {/*<div>
          <a>Announcements</a>
        </div>
        <div>
          <a>Resources</a>
        </div>
        <div>
          <a>Events</a>
        </div>
        <div>
          <a>Team</a>
        </div>
        <div>
          <a>Calendar</a>
        </div>*/}

        {/*<a>Announcements</a>
        <a>Resources</a>
        <a>Events</a>
        <a>Team</a>
        <a>Calendar</a>*/}

        <a href="/" className="absolute top-[48px]">
          <div className="absolute top-[4vw] text-[#FFFFFF]">Home</div>
        </a>

        <a href="/team" className="absolute top-[calc(48px+8vw)]">
          <div className="absolute top-[4vw] text-[#FFFFFF]">Team</div>
        </a>

        <a href="/opportunities" className="absolute top-[calc(48px+16vw)]">
          <div className="absolute top-[4vw] text-[#FFFFFF]">Opportunities</div>
        </a>

        <a href="https://docs.google.com/document/d/1ltKbFo0SDqg417J16mmhc8D6DiNpYxOr6op9mmxx0aA/edit?usp=sharing" className="absolute top-[calc(48px+24vw)]">
          <div className="absolute top-[4vw] text-[#FFFFFF]">Course Selection Guide</div>
        </a>
      </div>

      <div
        className="lg:hidden absolute block w-[24px] h-[24px]
        top-[24px] right-[55px] -translate-y-1/2"
      >
        <ThemeButton />
      </div>

      <img
        src="/icons/hamburger.svg"
        aria-checked={hamburgerOpened}
        className="
        lg:hidden block
        absolute
        w-[24px] h-[24px]
        top-[24px] right-[14px] -translate-y-1/2 
        
        rotate-0 aria-checked:rotate-90
        transition-transform ease-out duration-[300ms]
        
        invert"
        onClick={() => {
          setHamburgerOpened(!hamburgerOpened);
        }}
      />
    </div>
  );
}
