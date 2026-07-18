"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  href: string;
};

const pageNavItems: NavItem[] = [
  { name: "団体について", href: "/about" },
  { name: "活動内容", href: "/activities" },
  { name: "ニュース", href: "/news" },
  { name: "お問い合わせ", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHidden(latest > previous && latest > 180);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5 sm:px-4"
    >
      <div className="nav-island flex w-full max-w-5xl items-center justify-between gap-2 rounded-full px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3 md:px-5">
        <Link href="/" className="flex min-h-11 min-w-0 items-center gap-3">
          <span className="min-w-0">
            <span className="block max-w-[13.5rem] truncate text-[13px] font-black tracking-tight text-[var(--ink)] sm:max-w-none sm:text-sm">
              Happy Hearts English
            </span>
            <span className="hidden text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--pink-deep)] md:block">
              Bunkyo-ku, Tokyo
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {pageNavItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
              >
                <div
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[13px] font-bold transition-colors duration-300",
                    isActive ? "text-[var(--pink-deep)]" : "text-[var(--ink)]/68 hover:text-[var(--ink)]"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute left-1/2 top-full mt-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[var(--pink)]"
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-full bg-[var(--pink)] px-5 text-sm font-bold text-white shadow-[var(--shadow-card)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[var(--pink-deep)] hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
          >
            参加する
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="min-h-11 min-w-11 rounded-full p-2 text-[var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)] md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-3 bottom-3 top-[4.25rem] rounded-[var(--r-lg)] border border-[var(--line-soft)] bg-[var(--paper)] p-5 shadow-[var(--shadow-lift)] sm:top-20 sm:p-8 md:hidden"
            >
              <div className="flex h-full flex-col justify-center gap-2 text-center sm:gap-3">
                {pageNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-[var(--r-md)] px-4 py-4 text-xl font-black text-[var(--ink)] hover:bg-[var(--blush)] hover:text-[var(--pink-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pink-deep)] sm:text-2xl"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
