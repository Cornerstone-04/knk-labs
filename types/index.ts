export type ProductPref = "tek-glove" | "echo-glove" | "both" | "";

export type AboutExpertiseRowProps = {
  index: number;
  title: string;
  description: string;
};

export type NavbarCtaProps = {
  className?: string;
  onClick?: () => void;
};