"use client";

import Image from "next/image";
import { useState } from "react";
import { navItems, socialLinks } from "@/data/site";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="sidebar-fab" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        Sidebar
      </button>

      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="sidebar-head">
          <span className="sidebar-brand" aria-label="MAA">
            <Image src="/images/brand/maa-logo.png" alt="Logo MAA" width={34} height={34} />
          </span>
          <button className="chip" type="button" onClick={() => setOpen(false)}>
            Fermer
          </button>
        </div>
        <nav className="sidebar-nav" aria-label="Navigation latérale">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="sidebar-links">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={socialLinks.email}>E-mail</a>
        </div>
      </aside>
    </>
  );
}
