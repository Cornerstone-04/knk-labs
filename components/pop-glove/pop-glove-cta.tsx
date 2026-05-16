"use client";

// import Link from "next/link";
// import { motion } from "motion/react";
import { CTASection, CTATitle } from "../ui/cta-section";

// type PopGloveCtaProps = {
//   onConfigureClick: () => void;
// };

// export function PopGloveCta({ onConfigureClick }: PopGloveCtaProps) {
//   return (
//     <section className="border-b border-border px-6 py-20 md:px-12 md:py-28">
//       <div className="mx-auto max-w-4xl text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <h2 className="mb-8 font-heading text-[clamp(2rem,6vw,4rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
//             Ready for the Future of Watches?
//           </h2>

//           <p className="mx-auto mb-12 max-w-[55ch] font-sans text-[0.95rem] text-white/60">
//             The P.O.P Glove is available for pre-order now. Join an exclusive
//             community of drivers who demand both precision and style.
//           </p>

//           <div className="flex flex-col justify-center gap-4 sm:flex-row items-center">
//             <Link
//               href="/waitlist"
//               className="inline-flex justify-center bg-orange px-10 py-4 font-sans text-[0.85rem] font-semibold tracking-[0.08em] text-black no-underline transition-opacity duration-200 hover:opacity-85 w-fit"
//             >
//               Pre-Order Now
//             </Link>

//             <button
//               type="button"
//               onClick={onConfigureClick}
//               className="inline-flex cursor-pointer justify-center border border-white/20 bg-transparent px-10 py-4 font-sans text-[0.85rem] font-semibold tracking-[0.08em] text-white transition-all duration-200 hover:border-white/50 hover:bg-white/5 w-fit"
//             >
//               Build Your Custom P.O.P Glove
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

export function PopGloveCta() {
  return (
    <CTASection
      label=""
      size="large"
      title={
        <CTATitle firstLine="Ready for the" secondLine="Future of Watches?" />
      }
      description="The P.O.P Glove is available for pre-order now. Join an exclusive community of drivers who demand both precision and style."
      buttonText="Pre-Order Now"
      href="/waitlist"
    />
  );
}
