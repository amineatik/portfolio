  import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ message: "Payload invalide." }, { status: 400 });

  const { name, email, subject, message, company } = body as Record<string, string>;
  if (company) return NextResponse.json({ message: "Spam détecté." }, { status: 400 });
  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: "Tous les champs sont requis." }, { status: 400 });
  }

  return NextResponse.json({
    message: "Message reçu. Le back est prêt pour Resend, Formspree ou EmailJS.",
  });
}
