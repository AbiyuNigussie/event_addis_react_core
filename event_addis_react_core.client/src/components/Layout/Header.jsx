import React from "react";

const Header = () => {
  return (
    <header className="h-screen sm:max-h-96 headerImage">
      <div className="h-full bg-black/50 flex items-center text-left text-white">
        <div className="flex flex-col gap-4 mx-5 md:mx-16">
          <span className="text-2xl">EVENTS, MEETUPS & CONFERENCES</span>
          <span className="text-lg">Event Listing & Ticketking</span>
          <div className="flex flex-col mt-5">
            <button className="border rounded-md w-fit px-3 py-2">
              Find Events
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
