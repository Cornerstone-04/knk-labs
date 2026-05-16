"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { popGloveFeatures } from "@/lib/pop-glove";

export function PopGloveFeatures() {
  return (
    <section className="overflow-x-clip border-b border-border bg-bg">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:px-10 lg:px-12 lg:py-32">
        <div className="mb-10 grid gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 font-mono text-xxs tracking-[0.3em] text-orange normal-case">
              Engineered for the Driver
            </p>

            <h2 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-tight tracking-[-0.02em] text-white normal-case">
              Every Detail Has a Purpose.
            </h2>
          </motion.div>

          {/* <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-[58ch] font-sans text-[0.95rem] leading-[1.9] text-white/50"
          >
            Built around visibility, control, and the Royal Pop watch system,
            the P.O.P Glove turns a driving accessory into a functional cockpit
            interface.
          </motion.p> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 overflow-hidden border border-border bg-[#f3ece5]"
        >
          <div className="relative aspect-4/5 sm:aspect-16/10 lg:aspect-21/9">
            <Image
              src="/images/pop-glove/pop-design-cutout.png"
              alt="P.O.P Glove design"
              fill
              sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 1200px"
              className="object-contain"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
              <p className="font-mono text-xxs tracking-[0.25em] text-orange normal-case">
                P.O.P Glove System
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {popGloveFeatures.map((feature, index) => (
            <motion.article
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="min-w-0 bg-bg p-6 sm:p-8 lg:p-10"
            >
              <div className="mb-8 flex items-center justify-between gap-6">
                <span className="font-mono text-xxs tracking-[0.25em] text-orange">
                  {feature.id}
                </span>

                <span className="h-px flex-1 bg-white/10" />
              </div>

              <h3 className="mb-5 wrap-break-word font-heading text-[clamp(1.7rem,4vw,2.75rem)] font-black leading-[0.95] tracking-[-0.03em] text-white normal-case">
                {feature.title}
              </h3>

              <p className="mb-8 max-w-[48ch] wrap-break-word font-sans text-[0.9rem] leading-[1.85] text-white/50">
                {feature.desc}
              </p>

              {"bullets" in feature && Array.isArray(feature.bullets) && (
                <div className="flex flex-wrap gap-2">
                  {feature.bullets.map((bullet) => (
                    <span
                      key={bullet}
                      className="border border-white/10 bg-white/3 px-3 py-1.5 font-mono text-xxs tracking-[0.12em] text-white/40"
                    >
                      {bullet}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import Image from "next/image";
// import { motion } from "motion/react";
// import { popGloveFeatures } from "@/lib/pop-glove";

// export function PopGloveFeatures() {
//   return (
//     <section className="border-b border-border">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
//         <div className="flex items-start border-b border-border md:border-r md:border-b-0 px-8 md:px-0">
//           <div className="relative flex min-h-105 w-full items-center justify-center bg-[#f3ece5] md:sticky md:top-0 md:h-svh">
//             <div className="relative">
//               <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(249,115,22,0.08)_0%,transparent_75%)] blur-md" />

//               <motion.div
//                 animate={{ y: [0, -10, 0] }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="mx-auto w-full max-w-70 md:max-w-85 lg:max-w-96"
//               >
//                 <Image
//                   src="/images/pop-glove/pop-design-cutout.png"
//                   alt="P.O.P Glove features"
//                   width={420}
//                   height={420}
//                   className="relative z-10 h-auto w-full object-contain"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         <div className="min-w-0 overflow-x-clip">
//           {popGloveFeatures.map((feature, index) => (
//             <motion.div
//               key={feature.id}
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.6, delay: index * 0.08 }}
//               className="min-w-0 overflow-hidden border-b border-border px-6 py-10 md:px-12 md:py-20"
//             >
//               <div className="mb-6 flex min-w-0 flex-wrap items-center gap-2">
//                 <span className="font-mono text-xxs tracking-[0.25em] text-orange">
//                   {feature.id}
//                 </span>
//                 <span className="font-mono text-xxs tracking-[0.15em] text-white/50">
//                   &middot;
//                 </span>
//                 <span className="bg-orange px-2 py-0.5 font-mono text-xxs tracking-[0.15em] text-black normal-case">
//                   {feature.title}
//                 </span>
//               </div>

//               <h2 className="mb-6 max-w-full wrap-break-word font-heading text-[clamp(2rem,4vw,3rem)] font-black leading-none text-white normal-case">
//                 {feature.title}
//               </h2>

//               <p className="max-w-full wrap-break-word font-sans text-[0.9rem] leading-[1.85] text-white/50 md:mb-8">
//                 {feature.desc}
//               </p>

//               {"bullets" in feature && Array.isArray(feature.bullets) && (
//                 <ul className="space-y-3">
//                   {feature.bullets.map((bullet, bulletIndex) => (
//                     <motion.li
//                       key={bullet}
//                       initial={{ opacity: 0, x: -8 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{
//                         duration: 0.4,
//                         delay: bulletIndex * 0.06,
//                       }}
//                       className="flex items-start gap-3"
//                     >
//                       <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-orange" />
//                       <span className="font-sans text-[0.85rem] text-white/55">
//                         {bullet}
//                       </span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
