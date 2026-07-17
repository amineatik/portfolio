"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    setStatus(response.ok ? "success" : "error");
    setMessage(data.message ?? "Erreur inattendue");
  }

  return (
    <form action={onSubmit} className="glass form-card">
      <div className="field-grid">
        <label>
          Nom
          <input name="name" required minLength={2} />
        </label>
        <label>
          E-mail
          <input name="email" type="email" required />
        </label>
      </div>
      <label>
        Sujet
        <input name="subject" required minLength={3} />
      </label>
      <label>
        Message
        <textarea name="message" required minLength={10} />
      </label>
      <input name="company" className="honeypot" tabIndex={-1} autoComplete="off" />
      <button className="button primary" disabled={status === "loading"} type="submit">
        {status === "loading" ? "Envoi..." : "Envoyer le message"}
      </button>
      {status !== "idle" ? <p className={`notice ${status}`}>{message}</p> : null}
    </form>
  );
}
