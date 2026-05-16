type WaitlistEmailData = {
  formType: "knk" | "pop";
  fullName: string;
  email: string;
  country: string;
  productInterest?: string | null;
  selectedHand?: string | null;
  selectedColour?: string | null;
  selectedStyle?: string | null;
  watchOrientation?: string | null;
};

function row(label: string, value?: string | null) {
  if (!value) return "";

  return `
    <tr>
      <td style="padding: 10px 0; color: #8a8a8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em;">
        ${label}
      </td>
      <td style="padding: 10px 0; color: #ffffff; font-size: 14px; text-align: right;">
        ${value}
      </td>
    </tr>
  `;
}

function baseEmail(content: string) {
  return `
    <div style="margin:0; padding:0; background:#050505; font-family: Arial, sans-serif;">
      <div style="max-width: 620px; margin: 0 auto; padding: 40px 20px;">
        <div style="border: 1px solid rgba(255,255,255,0.10); background:#0b0b0b; padding: 32px;">
          <p style="margin:0 0 28px; color:#f97316; font-size:11px; letter-spacing:0.3em; text-transform:uppercase;">
            KNK Labs
          </p>

          ${content}

          <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.10);">
            <p style="margin:0; color:#777; font-size:12px; line-height:1.7;">
              This email was sent because you joined the KNK Labs waitlist.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function customerWaitlistEmail(data: WaitlistEmailData) {
  const isPop = data.formType === "pop";

  const content = `
    <h1 style="margin:0 0 20px; color:#ffffff; font-size:32px; line-height:1.05;">
      ${isPop ? "P.O.P Glove Waitlist Confirmed" : "Waitlist Confirmed"}
    </h1>

    <p style="margin:0 0 24px; color:#b5b5b5; font-size:15px; line-height:1.8;">
      Hi ${data.fullName}, we’ve received your ${
        isPop ? "P.O.P Glove configuration" : "KNK Labs waitlist request"
      }. You’ll be contacted when preorder details become available.
    </p>

    <table style="width:100%; border-collapse:collapse; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.10); border-bottom: 1px solid rgba(255,255,255,0.10);">
      ${row("Product", isPop ? "P.O.P Glove" : data.productInterest)}
      ${isPop ? row("Hand", data.selectedHand) : ""}
      ${isPop ? row("Colour", data.selectedColour) : ""}
      ${isPop ? row("Style", data.selectedStyle) : ""}
      ${isPop ? row("Watch Orientation", data.watchOrientation) : ""}
    </table>

    <p style="margin:28px 0 0; color:#f97316; font-size:13px; line-height:1.7;">
      Thank you for joining the first access list.
    </p>
  `;

  return baseEmail(content);
}

export function adminWaitlistEmail(data: WaitlistEmailData) {
  const isPop = data.formType === "pop";

  const content = `
    <h1 style="margin:0 0 20px; color:#ffffff; font-size:30px; line-height:1.05;">
      New ${isPop ? "P.O.P Glove" : "KNK Gloves"} Waitlist Submission
    </h1>

    <table style="width:100%; border-collapse:collapse; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.10); border-bottom: 1px solid rgba(255,255,255,0.10);">
      ${row("Name", data.fullName)}
      ${row("Email", data.email)}
      ${row("Country", data.country)}
      ${row("Form Type", data.formType.toUpperCase())}
      ${row("Product Interest", data.productInterest)}

      ${isPop ? row("Selected Hand", data.selectedHand) : ""}
      ${isPop ? row("Selected Colour", data.selectedColour) : ""}
      ${isPop ? row("Selected Style", data.selectedStyle) : ""}
      ${isPop ? row("Watch Orientation", data.watchOrientation) : ""}
    </table>
  `;

  return baseEmail(content);
}
