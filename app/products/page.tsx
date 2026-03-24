"use client";

import { products } from "@/lib/data";
import {
  ProductRow,
  ProductsBundle,
  ProductsCta,
  ProductsHero,
} from "@/components/products";

export default function ProductsPage() {
  return (
    <div className="bg-bg pt-16 overflow-x-hidden">
      <ProductsHero />
      {products.map((product, index) => (
        <ProductRow key={product.slug} product={product} index={index} />
      ))}

      <ProductsBundle />
      <ProductsCta />
    </div>
  );
}
