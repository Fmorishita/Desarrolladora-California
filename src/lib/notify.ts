import "server-only";

/**
 * Envío de notificación de lead por email vía Resend (opcional).
 * Usa fetch directo para no agregar dependencias. Si faltan envs,
 * no hace nada y devuelve false (el lead ya se guardó en DB).
 */
export async function sendLeadNotification(params: {
  subject: string;
  rows: Record<string, unknown>;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_NOTIFICATION_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  const fromName = process.env.RESEND_FROM_NAME ?? "Desarrolladora California";
  if (!apiKey || !to || !from) return false;

  const html = renderTable(params.rows);

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${fromName} <${from}>`,
        to: [to],
        subject: params.subject,
        html,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

function escapeHtml(value: unknown): string {
  return String(value ?? "—")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderTable(rows: Record<string, unknown>): string {
  const body = Object.entries(rows)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#3E4B3A;border-bottom:1px solid #eee;">${escapeHtml(
          k,
        )}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;">${escapeHtml(
          v,
        )}</td></tr>`,
    )
    .join("");
  return `<div style="font-family:system-ui,sans-serif;max-width:640px;">
    <h2 style="color:#1A1917;">Nuevo registro — Desarrolladora California</h2>
    <table style="border-collapse:collapse;width:100%;font-size:14px;">${body}</table>
  </div>`;
}
