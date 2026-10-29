import { Link } from "react-router-dom";
import { Github, Heart, Linkedin } from "lucide-react";
import { profile } from "@/data/site";

// Site footer with social links and a quiet link to the admin inbox
function Footer() {
  return (
    <footer className="border-t border-line bg-paper/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-ink-soft sm:flex-row sm:px-6">
        <p className="flex items-center gap-1.5">
          Made with <Heart className="h-3.5 w-3.5 fill-pink text-pink" aria-label="love" /> by {profile.name} ·{" "}
          {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-blush hover:text-rose"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-blush hover:text-rose"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <Link to="/login" className="ml-2 rounded-full px-3 py-1.5 text-xs text-ink-soft/70 hover:bg-blush hover:text-rose">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
