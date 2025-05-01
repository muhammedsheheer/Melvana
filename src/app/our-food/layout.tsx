import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Vu Lounge Menu | Exquisite Turkish Cuisine & Premium Steaks",
  description:
    "Browse the full menu at Vu Lounge, featuring authentic Turkish dishes, premium steaks, fresh seafood, and indulgent desserts. Experience culinary excellence in Bushey.",
  icons: [{ rel: "icon", url: "/images/home/logo.png" }],
  keywords:"Vu Lounge menu, Turkish cuisine Bushey, steakhouse menu, Mediterranean food, fine dining, halal food",
};

const layout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return children;
};

export default layout;
