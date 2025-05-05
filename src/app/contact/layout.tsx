import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Contact Mevlana ",
  description:
    "Get in touch with Mevlana for reservations, event bookings, or inquiries. Call us, email, or visit our location. ",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "Mevlana, Turkish restaurant Bushey, shisha lounge, steakhouse, fine dining, premium shisha, Mediterranean cuisine",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
