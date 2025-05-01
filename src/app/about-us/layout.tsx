import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "About Vu Lounge | Where Exquisite Dining Meets Premium Shisha",
  description:
    "Discover the story behind Vu Lounge – a unique blend of Turkish cuisine, premium steaks, and a luxurious shisha lounge in the heart of Bushey. Experience warmth, flavor, and elegance.",
  icons: [{ rel: "icon", url: "/images/home/logo.png" }],
  keywords:
    "about Vu Lounge, Turkish dining experience, shisha lounge Bushey, fine dining Bushey, luxury restaurant",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
