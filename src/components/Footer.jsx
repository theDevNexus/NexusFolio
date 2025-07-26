import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border px-4 py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} DevNexus.in. All Rights Reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-meteor/10 hover:bg-meteor/20 text-primary transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
}
