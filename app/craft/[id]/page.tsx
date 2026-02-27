import { Metadata } from "next";
import { getCraft } from "@/lib/api/crafts";
import { ContentBlock } from "@/lib/types";
import CraftDetailClient from "./CraftDetailClient";

function extractFirstParagraph(blocks: ContentBlock[]): string {
  for (const block of blocks) {
    if (block.type === "paragraph" && block.content) {
      return block.content;
    }
  }
  return "";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const craft = await getCraft(id).catch(() => null);

  if (!craft) return {};

  const rawDescription =
    extractFirstParagraph(craft.description ?? []) || craft.tagline;
  const description =
    rawDescription.length > 155
      ? rawDescription.slice(0, 152) + "..."
      : rawDescription;

  return {
    title: craft.name,
    description,
    openGraph: {
      title: craft.name,
      description,
      images: craft.image_url ? [{ url: craft.image_url }] : [],
    },
    twitter: {
      title: craft.name,
      description,
      images: craft.image_url ? [craft.image_url] : [],
    },
  };
}

export default async function CraftDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <CraftDetailClient id={id} />;
}
