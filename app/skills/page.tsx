export default function SkillsPage() {
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
            CAPABILITY MATRIX
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-medium">
            Skills & Technical Domains
          </h1>

          <div className="mt-4 h-px w-32 bg-gradient-to-r from-white/40 to-transparent" />
        </section>

        {/* SKILLS GRID */}
        <section className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* SECURITY ANALYSIS & THINKING */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-10 py-10">
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              SECURITY ANALYSIS & THINKING
            </h2>

            <ul className="decrypt-content mt-6 space-y-3 text-white/85">
              <li>• Analytical and critical thinking applied to security problems</li>
              <li>• Vulnerability assessment and risk evaluation</li>
              <li>• Understanding attack paths and system weaknesses</li>
              <li>• Translating findings into actionable security insights</li>
            </ul>
          </div>

          {/* RED TEAMING & ETHICAL HACKING */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-10 py-10">
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              RED TEAMING & ETHICAL HACKING
            </h2>

            <ul className="decrypt-content mt-6 space-y-3 text-white/85">
              <li>• Red teaming and adversary simulation techniques</li>
              <li>• Penetration testing across applications and networks</li>
              <li>• Ethical hacking with a focus on realistic attack scenarios</li>
              <li>• Social engineering awareness and exploitation paths</li>
            </ul>
          </div>

          {/* APPLICATION & BACKEND SECURITY */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-10 py-10">
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              APPLICATION & BACKEND SECURITY
            </h2>

            <ul className="decrypt-content mt-6 space-y-3 text-white/85">
              <li>• Java programming with security-conscious design</li>
              <li>• Spring Framework, REST APIs, and application-layer services</li>
              <li>• Secure interaction with SQL databases</li>
              <li>• Message queuing, build tools, and backend workflows</li>
            </ul>
          </div>

          {/* NETWORKING, WIRELESS & IOT */}
          <div className="decrypt-box relative rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-10 py-10">
            <div className="pointer-events-none absolute inset-0">
              <span className="decrypt-corner tl absolute left-3 top-3 h-4 w-4 border-l border-t border-white/40" />
              <span className="decrypt-corner br absolute right-3 bottom-3 h-4 w-4 border-r border-b border-white/40" />
            </div>

            <span className="decrypt-hint">ENCRYPTED</span>

            <h2 className="text-sm tracking-widest text-white/60">
              NETWORKING, WIRELESS & IOT SECURITY
            </h2>

            <ul className="decrypt-content mt-6 space-y-3 text-white/85">
              <li>• IPv4 and IPv6 addressing and network fundamentals</li>
              <li>• Wireless access technologies and security considerations</li>
              <li>• Application-layer networking services</li>
              <li>• IoT security concepts and device exposure risks</li>
            </ul>
          </div>

        </section>

      </div>
    </main>
  )
}
