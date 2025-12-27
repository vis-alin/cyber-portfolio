export default function ExperiencePage() {
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
            OPERATIONAL EXPERIENCE
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-medium">
            Experience & Leadership
          </h1>

          <div className="mt-4 h-px w-32 bg-gradient-to-r from-white/40 to-transparent" />
        </section>

        {/* EXPERIENCE BLOCKS */}
        <section className="space-y-10">

          {/* BSIDES EXPERIENCE */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-12 py-12">
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              SECURITY BSIDES VADODARA
            </h2>

            <div className="decrypt-content mt-6 space-y-4 text-white/80">
              <p className="text-white font-medium">
                Core Team Lead
              </p>

              <p>
                Played a leadership role in organizing and executing
                Security BSides Vadodara, contributing to planning,
                coordination, and on-ground operations of a
                community-driven cybersecurity conference.
              </p>

              <p>
                Worked closely with speakers, volunteers, and industry
                professionals to enable knowledge sharing, security
                awareness, and high-quality technical discussions.
              </p>

              <p className="text-white/60 text-sm">
                Focus: Community Leadership • Event Operations • Security Awareness
              </p>
            </div>
          </div>

          {/* CISCO ETHICAL HACKER */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-12 py-12">
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              ETHICAL HACKER — CISCO NETWORKING ACADEMY
            </h2>

            <div className="decrypt-content mt-6 space-y-4 text-white/80">
              <p className="text-white font-medium">
                Cisco Networking Academy Program
              </p>

              <p>
                Completed structured ethical hacking training focused on
                understanding attacker methodologies, exploitation
                techniques, and security weaknesses across networks,
                systems, and applications.
              </p>

              <p>
                Emphasized responsible testing, adversary thinking,
                and defensive awareness aligned with enterprise
                security practices.
              </p>

              <p className="text-white/60 text-sm">
                Focus: Ethical Hacking • Adversary Techniques • Defensive Awareness
              </p>
            </div>
          </div>

          {/* PRACTICAL SECURITY WORK */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-12 py-12">
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              PRACTICAL SECURITY & RESPONSIBLE DISCLOSURE
            </h2>

            <div className="decrypt-content mt-6 space-y-4 text-white/80">
              <p>
                Identified a security misconfiguration in a publicly
                accessible Grafana instance that lacked proper
                authentication controls, exposing it to unauthorized
                access.
              </p>

              <p>
                Assessed the potential impact, including data exposure
                and operational risk, and responsibly reported the
                issue to the affected organization for remediation.
              </p>

              <p>
                This experience reinforced the importance of secure
                configuration, continuous monitoring, and ethical
                responsibility in real-world security operations.
              </p>

              <p className="text-white/60 text-sm">
                Focus: Vulnerability Identification • Responsible Disclosure • Defensive Security
              </p>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}
