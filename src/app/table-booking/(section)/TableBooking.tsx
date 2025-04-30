"use client";

import TableBookingForm from "@/app/table-booking/(section)/TableBookingForm";

const TableBooking = ({}) => {
  return (
    <div
      className="flex h-full w-full items-center justify-center gap-[1.2rem] bg-[#f7f4ed] py-12"
      style={{
        backgroundImage: "url('/images/aboutbg.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
      }}
    >
      <TableBookingForm />
    </div>
  );
};

export default TableBooking;
