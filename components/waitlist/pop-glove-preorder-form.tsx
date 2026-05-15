"use client";

import Image from "next/image";
import { WaitlistField } from "./waitlist-field";

type PopGlovePreorderFormProps = {
  loading: boolean;
  selectedColourName: string;
  selectedColourImage: string;
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
};

export function PopGlovePreorderForm({
  loading,
  selectedColourName,
  selectedColourImage,
  onSubmit,
}: PopGlovePreorderFormProps) {
  return (
    <div className="flex min-w-0 flex-col gap-8">
      <div className="relative aspect-square min-w-0 overflow-hidden border border-white/10 bg-black/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.1),transparent)]" />
        <Image
          src={selectedColourImage}
          alt={`${selectedColourName} P.O.P Glove`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <WaitlistField
          label="Full Name *"
          name="name"
          type="text"
          required
          placeholder="Your name"
        />

        <WaitlistField
          label="Email Address *"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />

        <WaitlistField
          label="Country *"
          name="country"
          type="text"
          required
          placeholder="Your country"
        />

        <div className="border-t border-white/10 pt-6">
          <p className="mb-3 text-xs text-white/40">
            By pre-ordering, you agree to be notified when the P.O.P Glove
            launches and will receive exclusive early-bird pricing.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`border-none px-8 py-4 font-sans text-[0.85rem] font-semibold normal-case tracking-[0.08em] text-black transition-opacity ${
            loading
              ? "cursor-not-allowed bg-orange/40"
              : "cursor-pointer bg-orange hover:opacity-85"
          }`}
        >
          {loading ? "Securing Pre-Order..." : "Reserve Your P.O.P Glove →"}
        </button>
      </form>
    </div>
  );
}
