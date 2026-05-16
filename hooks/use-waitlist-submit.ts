"use client";

import { useState } from "react";

type WaitlistPayload = {
  formType: "knk" | "pop";
  fullName: string;
  email: string;
  country?: string;
  productInterest?: string;
  selectedHand?: string;
  selectedColour?: string;
  selectedStyle?: string;
  watchOrientation?: string;
};

type WaitlistApiResponse = {
  success: boolean;
  message: string;
};

export function useWaitlistSubmit() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submitWaitlist(payload: WaitlistPayload) {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as WaitlistApiResponse;

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Could not join waitlist.");
      }

      return data;
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      setError(message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    setError,
    submitWaitlist,
  };
}
