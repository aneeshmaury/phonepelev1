"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, LogOut, Check } from "lucide-react";

export default function App() {
  const [ticketId, setTicketId] = useState("");

  useEffect(() => {
    const generateTicketId = () => {
      return Math.floor(10000000 + Math.random() * 90000000);
    };

    setTicketId(generateTicketId());
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-[#2f3135]">
      {/* Main mobile container */}
      <div className="mx-auto min-h-screen w-full max-w-[663px] bg-white">
        
        {/* Header */}
        <div className="flex items-center justify-between bg-[#fafafa] px-[27px] py-[20px]">
          
          {/* Back */}
          <button className="flex items-center gap-[9px] text-[20px] font-normal text-[#303236]">
            <ArrowLeft
              size={20}
              strokeWidth={2.2}
            />

            <span>Back</span>
          </button>

          {/* Logout */}
          <button className="flex items-center gap-[8px] text-[20px] font-normal text-[#303236]">
            <LogOut
              size={20}
              strokeWidth={2}
            />

            <span>Logout</span>
          </button>
        </div>

        {/* Success icon */}
        <div className="mt-3 flex justify-center pt-[10px]">
          <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#24763b]">
            <Check
              size={47}
              strokeWidth={2.2}
              className="text-white"
            />
          </div>
        </div>

        {/* Main title */}
        <h1 className="mt-[34px] text-center text-[25px] font-normal leading-tight text-[#2d2f33]">
          We have received your request.
        </h1>

        {/* Description */}
        <div className="mx-auto mt-[19px] max-w-[620px] px-[20px] text-center">
          <p className="text-[15px] font-normal leading-[1.55] text-[#67696d]">
            We have raised your issue with our grievance team and your
            <br />
            grievance ticket ID is{" "}
            <span className="font-bold text-[#5a4f86]">
              {ticketId}
            </span>
            <br />
            You can expect to receive an update within the next 48 hours.
          </p>
        </div>

        {/* Done button */}
        <div className="mt-[22px] px-[27px]">
          <button className="h-[48px] w-full rounded-[11px] border border-[#b9a8db] bg-[#603da0] text-[20px] font-medium tracking-[0.2px] text-white shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
            DONE
          </button>
        </div>

        {/* Divider area */}
        <div className="mt-[20px] border-t border-[#eeeeee] bg-white">
          
          {/* Bottom information */}
          <div className="px-[27px] pb-[20px] pt-[25px]">
            <p className="text-[15px] font-normal leading-[1.18] text-[#66686d]">
              For more details, please check the ticket you’ve created on
              <br />
              your PhonePe app by tapping{" "}
              <span className="text-[#66686d]">
                ? Help &gt; View Tickets.
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}