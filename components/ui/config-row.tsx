type ConfigRowProps = {
  label: string;
  value: string;
};

export function ConfigRow({ label, value }: ConfigRowProps) {
  return (
    <div>
      <p className="mb-2 font-mono text-xxxs tracking-[0.05em] text-white/40">
        {label}
      </p>
      <p className="font-sans text-[0.95rem] text-white">{value}</p>
    </div>
  );
}
