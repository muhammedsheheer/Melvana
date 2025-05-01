import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Premium Shisha Lounge | Luxury Shisha Experience at Vu Lounge",
  description:
    "Relax in Vu Lounge’s exclusive shisha lounge, offering a premium selection of flavored shisha, served in a luxurious and stylish setting. The ultimate shisha experience in Bushey.",
  icons: [{ rel: "icon", url: "/images/home/logo.png" }],
  keywords:
    "Vu Lounge shisha, shisha lounge Bushey, premium shisha flavors, luxury shisha, Turkish shisha bar, hookah lounge",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
