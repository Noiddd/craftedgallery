import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Browse stories and lessons from individuals at the top of their craft.",
};

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
