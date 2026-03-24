import { ProductPref } from "@/types";

export const WAITLIST_PRODUCT_OPTIONS: Array<{
  value: Exclude<ProductPref, "">;
  label: string;
}> = [
  { value: "tek-glove", label: "Tek Glove" },
  { value: "echo-glove", label: "Echo Glove" },
  { value: "both", label: "KNK Gloves" },
];
