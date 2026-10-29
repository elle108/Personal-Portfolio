import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Cloud } from "./Decor";
import { cn } from "@/lib/utils";

const links = [
  { to: "/#about", label: "About" },
  { to: "/#experience", label: "Experience" },
  { to: "/#projects", label: "Projects" },
  { to: "/personal", label: "Personal" },
];

// Sticky top navigation with a mobile menu
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const linkClass = ({ isActive }) =>
    cn(
      "rounded-full px-4 py-2 text-[15px] font-semibold text-ink-soft transition-colors hover:bg-blush hover:text-rose",
      isActive && location.pathname !== "/" && "bg-blush text-rose"
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-line bg-cream/85 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <Link to="/" onClick={close} className="group flex items-center gap-2" aria-label="Elle Miller, home">
          <span className="relative grid h-10 w-10 place-items-center">
            <Cloud className="absolute inset-0 h-10 w-10 drop-shadow-sm transition-transform group-hover:-translate-y-0.5" fill="#fde4ef" />
            <span className="relative pt-1 font-display text-sm font-semibold text-rose">em</span>
          </span>
          <span className="font-display text-xl text-ink">Elle Miller</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/#contact"
            className="ml-2 rounded-full bg-ink px-5 py-2 text-[15px] font-semibold text-white shadow-soft transition hover:bg-rose"
          >
            Say hi
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-blush md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-4 pb-5 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass} onClick={close}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/#contact" onClick={close} className="mt-2 rounded-full bg-ink px-5 py-3 text-center font-semibold text-white">
              Say hi
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
