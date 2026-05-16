// import {
//   customerWaitlistEmail,
//   adminWaitlistEmail,
// } from "@/lib/email/waitlist-emails";

// export default function EmailPreviewPage() {
//   const mockData = {
//     formType: "pop" as const,
//     fullName: "Keniye Koroye",
//     email: "hello@example.com",
//     country: "United Kingdom",
//     productInterest: "P.O.P Glove",
//     selectedHand: "Right Hand",
//     selectedColour: "Royal Black",
//     selectedStyle: "Full Finger",
//     watchOrientation: "Upright",
//   };

//   return (
//     <main className="min-h-screen bg-neutral-950 p-10 space-y-16">
//       <section>
//         <h1 className="mb-6 text-3xl font-bold text-white">Customer Email</h1>

//         <div
//           dangerouslySetInnerHTML={{
//             __html: customerWaitlistEmail(mockData),
//           }}
//         />
//       </section>

//       <section>
//         <h1 className="mb-6 text-3xl font-bold text-white">Admin Email</h1>

//         <div
//           dangerouslySetInnerHTML={{
//             __html: adminWaitlistEmail(mockData),
//           }}
//         />
//       </section>
//     </main>
//   );
// }
