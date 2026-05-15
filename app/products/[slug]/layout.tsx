import type { Metadata } from "next";
import { products } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | KNK Labs`,
    description: product.desc,
    openGraph: {
      title: `${product.name} | KNK Labs`,
      description: product.desc,
      images: [
        {
          url: product.images.hero,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | KNK Labs`,
      description: product.desc,
      images: [product.images.hero],
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
