"use client";

import { useState } from "react";
import { navItems } from "@/data/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-only">
      <button className="chip" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        Menu
      </button>
      {open ? (
        <div className="mobile-panel">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
