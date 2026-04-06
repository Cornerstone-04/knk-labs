import { InputHTMLAttributes } from "react";

type WaitlistFieldProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const WaitlistField = ({ label, ...props }: WaitlistFieldProps) => {
  return (
    <div>
      <label className="mb-2 block font-mono text-xs-plus normal-case tracking-[0.2em] text-white/70">
        {label}
      </label>

      <input
        {...props}
        className="w-full border-b border-border bg-transparent py-3 font-sans text-base text-white outline-none transition-colors placeholder:text-white/25 focus:border-orange"
      />
    </div>
  );
};
