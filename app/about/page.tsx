export default function AboutPage() {
  return (
    <main
      className="
        relative min-h-screen px-6 md:px-8 pt-32 pb-24 text-white
        bg-[radial-gradient(ellipse_at_top,_rgba(120,140,255,0.08),_transparent_55%),linear-gradient(to_bottom,_#05060a,_#000)]
      "
    >
      {/* SUBTLE GRID BACKGROUND */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* SOFT MODERN GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute top-[28%] left-1/2 -translate-x-1/2
            h-[36rem] w-[36rem] rounded-full
            bg-gradient-to-br from-indigo-400/10 via-sky-400/6 to-transparent
            blur-[180px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-20">

        {/* PAGE HEADER */}
        <section className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs tracking-[0.35em] text-white/50">
              OPERATOR PROFILE
            </p>

            <h1 className="mt-4 text-3xl md:text-4xl font-medium">
              Vishal — Cybersecurity Professional
            </h1>

            {/* MOTION FRAME STATUS LINE */}
            <div
              className="
                motion-frame relative mt-5 inline-flex overflow-hidden
                rounded-md border border-white/10
                bg-white/[0.04] backdrop-blur-md
                px-4 md:px-5 py-2
              "
            >
              <span
                className="
                  pointer-events-none absolute inset-0
                  bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.18),transparent)]
                  translate-x-[-120%]
                  animate-[scan_6s_linear_infinite]
                "
              />

              <p className="relative text-xs tracking-widest text-white/70">
                CYBERSECURITY ENGINEERING • DEFENSIVE SYSTEMS • THREAT RESEARCH
              </p>
            </div>

            <div className="mt-5 h-px w-32 bg-gradient-to-r from-white/40 to-transparent" />
          </div>

          {/* PROFILE IMAGE — ONLY ADDITION */}
          <div className="flex justify-start md:justify-end">
            <div className="relative">
              <img
                src="/profile/vishal.jpg"
                alt="Vishal – Cybersecurity Professional"
                className="
                  h-[150px] w-[130px] md:h-[170px] md:w-[150px]
                  object-cover
                  rounded-xl
                  border border-white/15
                  bg-black
                "
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20" />
            </div>
          </div>
        </section>

        {/* PROFILE SNAPSHOT + CREDENTIALS */}
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* PROFILE SNAPSHOT */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-8 md:px-10 py-10">
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              PROFILE SNAPSHOT
            </h2>

            <div className="decrypt-content mt-6 space-y-4 text-white/80">
              <p>
                I work at the intersection of cybersecurity engineering and
                real-world defense, focusing on how secure systems are designed,
                monitored, and sustained under realistic threat conditions.
              </p>

              <p>
                My approach is grounded in understanding attack paths, system
                behavior, and detection gaps, with an emphasis on building
                defensive clarity rather than relying on superficial tooling.
              </p>

              <p>
                I am particularly interested in how engineering decisions,
                visibility, and operational discipline shape the effectiveness
                of security programs over time.
              </p>
            </div>
          </div>

          {/* CREDENTIALS & LEADERSHIP */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-8 md:px-10 py-10">
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              CREDENTIALS & LEADERSHIP
            </h2>

            <ul className="decrypt-content mt-6 space-y-3 text-white/85">
              <li>• Certified Ethical Hacker (CEH) with a defense-oriented mindset</li>
              <li>• Core Team Lead — Security BSides Vadodara</li>
              <li>• Experience collaborating across technical and non-technical teams</li>
              <li>• Active participant in security research and learning communities</li>
              <li>• Comfortable translating technical findings into actionable insights</li>
            </ul>
          </div>
        </section>

        {/* OPERATING PHILOSOPHY */}
        <section className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-8 md:px-12 py-12">
          <div className="pointer-events-none absolute inset-0">
            <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
            <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
          </div>

          <span className="decrypt-hint">ENCRYPTED</span>

          <h2 className="text-sm tracking-widest text-white/60">
            OPERATING PHILOSOPHY
          </h2>

          <div className="decrypt-content mt-6 space-y-4 max-w-4xl text-white/80">
            <p>
              I believe effective cybersecurity is built on engineering rigor,
              situational awareness, and measurable outcomes. Security should
              reduce uncertainty, not add complexity.
            </p>

            <p>
              Strong defenses emerge from understanding systems end-to-end,
              anticipating realistic attacker behavior, and designing controls
              that are observable, explainable, and resilient under pressure.
            </p>

            <p>
              I value depth over noise, clarity over theatrics, and continuous
              improvement over static compliance.
            </p>
          </div>
        </section>

        {/* CURRENT FOCUS */}
        <section className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-8 md:px-12 py-12">
          <div className="pointer-events-none absolute inset-0">
            <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
            <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
          </div>

          <span className="decrypt-hint">ENCRYPTED</span>

          <h2 className="text-sm tracking-widest text-white/60">
            CURRENT FOCUS
          </h2>

          <ul className="decrypt-content mt-6 space-y-3 text-white/85">
            <li>• Designing and evaluating detection logic and alert quality</li>
            <li>• Studying real-world intrusion paths and attacker tradecraft</li>
            <li>• Improving visibility across endpoints, networks, and identities</li>
            <li>• Connecting security research with operational decision-making</li>
            <li>• Developing a deeper engineering perspective on cyber defense</li>
          </ul>
        </section>

      </div>
    </main>
  )
}
