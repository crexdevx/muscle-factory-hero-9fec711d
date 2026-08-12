import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/mfg-logo.jpg";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/70 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 md:px-8"
      >
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <img
            src={logoUrl}
            alt="Muscle Factory Gym logo"
            width={44}
            height={44}
            className="logo-blend h-11 w-11 shrink-0 object-contain"
          />
          <span className="truncate font-display text-sm tracking-[0.28em] uppercase text-foreground">
            Muscle Factory
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#membership"
            className="rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Join Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-border text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#membership"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-primary py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground"
          >
            Join Now
          </a>
        </div>
      )}
    </header>
  );
}