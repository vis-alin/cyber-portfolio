"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Certifications", href: "/certifications" },
  { name: "Articles", href: "/articles" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const currentIndex = navLinks.findIndex(l => l.href === pathname)
  const nextLink =
    currentIndex !== -1 && currentIndex < navLinks.length - 1
      ? navLinks[currentIndex + 1]
      : null

  // ✅ Hooks must always run
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (
        e.key.toLowerCase() === "n" &&
        nextLink &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        router.push(nextLink.href)
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [nextLink, router])

  // ✅ Conditional return AFTER hooks
  if (pathname === "/") return null

  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* LEFT */}
        <div className="text-sm tracking-widest text-white/70">
          VISHAL • SECURITY
        </div>

        {/* CENTER */}
        <nav className="hidden lg:flex gap-6 text-sm">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white/70 hover:text-white transition text-xl"
          aria-label="Command Menu"
        >
          ≡
        </button>
      </div>

      {open && (
        <div className="absolute right-8 top-full mt-2 w-72 rounded-md border border-white/10 bg-black/95 backdrop-blur-xl shadow-lg">
          <div className="px-4 py-3 text-xs tracking-widest text-white/50">
            SYSTEM STATUS
          </div>

          <div className="px-4 pb-2 text-sm text-green-400">
            ● ONLINE
          </div>

          <div className="px-4 pb-3 text-xs text-white/50">
            PAGE {currentIndex + 1} / {navLinks.length}
          </div>

          <div className="border-t border-white/10" />

          <div className="flex flex-col px-4 py-4 gap-3 text-sm">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition"
            >
              Contact
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              className="text-white/70 hover:text-white transition"
            >
              View Resume
            </a>

            <a
              href="mailto:vishal630488@gmail.com"
              className="text-white/70 hover:text-white transition"
            >
              Email
            </a>

            <a
              href="https://github.com/vis-alin"
              target="_blank"
              className="text-white/70 hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-kumar-11s10v20"
              target="_blank"
              className="text-white/70 hover:text-white transition"
            >
              LinkedIn
            </a>

            {nextLink && (
              <>
                <div className="border-t border-white/10 my-2" />
                <Link
                  href={nextLink.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-white/80 hover:text-white transition"
                >
                  <span className="text-xs tracking-widest">
                    NEXT (N)
                  </span>
                  <span className="text-sm">
                    {nextLink.name} →
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
