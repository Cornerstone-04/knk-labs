"use client";

import Image from "next/image";
import { WaitlistField } from "./waitlist-field";

type PopGlovePreorderFormProps = {
  loading: boolean;
  error: string;
  selectedColourName: string;
  selectedColourImage: string;
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void;
};

export function PopGlovePreorderForm({
  loading,
  error,
  selectedColourName,
  selectedColourImage,
  onSubmit,
}: PopGlovePreorderFormProps) {
  return (
    <div className="min-w-0 border border-white/10 bg-bg/60 p-5 sm:p-6 md:p-8">
      <div className="mb-8 border-b border-white/10 pb-6">
        <div className="grid grid-cols-[7rem_1fr] items-center gap-5 sm:grid-cols-[8rem_1fr]">
          <div className="relative aspect-square overflow-hidden border border-white/10 bg-black/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.12),transparent)]" />

            <Image
              src={selectedColourImage}
              alt={`${selectedColourName} P.O.P Glove`}
              fill
              className="object-cover"
              sizes="8rem"
            />
          </div>

          <div className="min-w-0">
            <p className="mb-2 font-mono text-xxs tracking-[0.22em] text-orange normal-case">
              Selected Edition
            </p>

            <h3 className="wrap-break-word font-heading text-[1.35rem] font-black leading-none text-white normal-case sm:text-[1.65rem]">
              {selectedColourName}
            </h3>

            <p className="mt-3 font-sans text-[0.82rem] leading-relaxed text-white/45">
              Join the waitlist and receive preorder details when launch access
              opens.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-5">
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

        {error && (
          <p className="border border-red-500/20 bg-red-500/10 px-4 py-3 font-sans text-sm text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`mt-2 border-none px-8 py-4 font-sans text-[0.85rem] font-semibold normal-case tracking-[0.08em] text-black transition-opacity ${
            loading
              ? "cursor-not-allowed bg-orange/40"
              : "cursor-pointer bg-orange hover:opacity-85"
          }`}
        >
          {loading ? "Submitting..." : "Join the Waitlist →"}
        </button>

        <p className="text-center text-xs leading-relaxed text-white/35">
          You’ll receive preorder updates when launch details are ready.
        </p>
      </form>
    </div>
  );
}
