export default function ProjectsPage() {
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
            OPERATION ARCHIVES
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-medium">
            Projects & Case Studies
          </h1>

          <div className="mt-4 h-px w-32 bg-gradient-to-r from-white/40 to-transparent" />
        </section>

        {/* PROJECTS GRID */}
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* PROJECT 1 */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-10 py-10">
            {/* CORNER ACCENTS */}
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              CROSS-PLATFORM ADVERSARY SIMULATION (KEYLOGGER RESEARCH)
            </h2>

            <div className="decrypt-content mt-6 space-y-4 text-white/80">
              <p>
                Designed a controlled, cross-platform adversary simulation
                operating across Windows, macOS, and Linux to study credential
                access techniques, persistence behavior, and system telemetry.
              </p>

              <p>
                The project was used to analyze detection gaps, logging
                visibility, and host-based indicators, with the primary goal
                of improving defensive monitoring and response strategies.
              </p>

              <p className="text-white/60 text-sm">
                Focus: Adversary Simulation • Endpoint Telemetry • Detection Gaps
              </p>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-10 py-10">
            {/* CORNER ACCENTS */}
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              ENTERPRISE SOC DETECTION & LOG ENGINEERING
            </h2>

            <div className="decrypt-content mt-6 space-y-4 text-white/80">
              <p>
                Designed and simulated an enterprise SOC environment focused
                on log ingestion, correlation, and detection engineering across
                Windows and Linux systems.
              </p>

              <p>
                Built detection logic aligned with MITRE ATT&CK, evaluated alert
                quality, and refined visibility to reduce noise while improving
                response accuracy.
              </p>

              <p className="text-white/60 text-sm">
                Focus: SOC Operations • Log Analysis • Detection Engineering
              </p>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-10 py-10">
            {/* CORNER ACCENTS */}
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              RED TEAMING & ATTACK PATH ANALYSIS
            </h2>

            <div className="decrypt-content mt-6 space-y-4 text-white/80">
              <p>
                Conducted structured red team exercises to understand realistic
                attacker workflows, including initial access, lateral movement,
                and privilege escalation.
              </p>

              <p>
                Mapped attacker actions to kill chains and MITRE ATT&CK to
                identify defensive blind spots and monitoring gaps.
              </p>

              <p className="text-white/60 text-sm">
                Focus: Adversary Simulation • Attack Paths • Threat Modeling
              </p>
            </div>
          </div>

          {/* PROJECT 4 */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-10 py-10">
            {/* CORNER ACCENTS */}
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              NETWORK & SYSTEM VISIBILITY ANALYSIS
            </h2>

            <div className="decrypt-content mt-6 space-y-4 text-white/80">
              <p>
                Analyzed network traffic and system behavior to identify
                anomalous communication patterns, misconfigurations, and
                potential data exfiltration paths.
              </p>

              <p>
                Focused on strengthening defensive visibility through protocol
                analysis, logging improvements, and validation of controls.
              </p>

              <p className="text-white/60 text-sm">
                Focus: Network Security • Traffic Analysis • Defensive Visibility
              </p>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}
