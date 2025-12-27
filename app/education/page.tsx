export default function EducationPage() {
  return (
    <main
      className="
        relative min-h-screen px-8 pt-32 pb-24 text-white
        bg-[radial-gradient(ellipse_at_top,_rgba(120,140,255,0.08),_transparent_55%),linear-gradient(to_bottom,_#05060a,_#000)]
      "
    >
      {/* SUBTLE GRID */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* SOFT GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute top-[30%] left-1/2 -translate-x-1/2
            h-[36rem] w-[36rem] rounded-full
            bg-gradient-to-br from-indigo-400/10 via-sky-400/6 to-transparent
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-20">

        {/* HEADER */}
        <section>
          <p className="text-xs tracking-[0.35em] text-white/50">
            ACADEMIC FORMATION
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-medium">
            Education
          </h1>

          <div className="mt-4 h-px w-32 bg-gradient-to-r from-white/40 to-transparent" />
        </section>

        {/* SINGLE EDUCATION BLOCK */}
        <section>
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-12 py-12">
            {/* CORNER ACCENTS */}
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              BACHELOR OF TECHNOLOGY — COMPUTER SCIENCE & ENGINEERING
            </h2>

            <div className="decrypt-content mt-6 space-y-4 text-white/80">
              <p className="text-white font-medium">
                Specialization in Cybersecurity
              </p>

              <p className="text-white/90">
                Parul University
              </p>

              <p>
                Currently pursuing a Bachelor of Technology in Computer Science
                and Engineering with a specialization in Cybersecurity, focusing
                on building a strong foundation in computing systems alongside
                applied security engineering.
              </p>

              <p>
                Academic focus includes operating systems, networking,
                application security, cryptography fundamentals, and secure
                system design, complemented by hands-on security labs and
                independent research.
              </p>

              <p>
                The program has strengthened my ability to analyze systems
                holistically, understand attack and defense trade-offs, and
                approach security problems with engineering discipline.
              </p>

              <p className="text-white/60 text-sm">
                Focus: Computer Science • Cybersecurity Engineering • Systems & Networks
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
