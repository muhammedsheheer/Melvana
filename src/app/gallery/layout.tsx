import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Contact Vu Lounge | Book Your Table or Shisha Lounge Experience",
  description:
    "Get in touch with Vu Lounge for reservations, event bookings, or inquiries. Call us, email, or visit our location in Bushey for a premium dining and shisha experience.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "contact Vu Lounge, Vu Lounge Bushey reservations, book table Bushey, Turkish restaurant contact",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
