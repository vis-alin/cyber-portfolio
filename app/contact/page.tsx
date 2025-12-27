export default function ContactPage() {
  return (
    <main
      className="
        relative min-h-screen px-8 pt-32 pb-28 text-white
        bg-[radial-gradient(ellipse_at_top,_rgba(120,140,255,0.08),_transparent_55%),linear-gradient(to_bottom,_#05060a,_#000)]
      "
    >
      {/* GRID */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.03]
          bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute top-[34%] left-1/2 -translate-x-1/2
            h-[32rem] w-[32rem] rounded-full
            bg-gradient-to-br from-indigo-400/10 via-sky-400/6 to-transparent
            blur-[160px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-24">

        {/* HEADER */}
        <section>
          <p className="text-xs tracking-[0.35em] text-white/50">
            VERIFIED COMMUNICATION
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-medium">
            Contact
          </h1>

          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
            This page lists the preferred and verified channels for professional
            communication, collaboration, and responsible security discussions.
          </p>

          <div className="mt-6 h-px w-40 bg-gradient-to-r from-white/40 to-transparent" />
        </section>

        {/* CONTACT LAYOUT */}
        <section className="grid grid-cols-1 gap-14 md:grid-cols-3">

          {/* PRIMARY CONTACT */}
          <div className="md:col-span-2 rounded-xl border border-white/10 bg-white/[0.045] backdrop-blur-xl px-12 py-12">
            <h2 className="text-sm tracking-widest text-white/60">
              PRIMARY CONTACT CHANNELS
            </h2>

            <p className="mt-6 max-w-xl text-white/80 leading-relaxed">
              These are the preferred channels for professional outreach,
              cybersecurity discussions, collaboration, and responsible
              disclosure.
            </p>

            <ul className="mt-10 space-y-6 text-white/85">

              <li>
                <span className="block text-xs tracking-widest text-white/50">
                  EMAIL
                </span>
                <a
                  href="mailto:vishal630488@gmail.com"
                  className="mt-1 inline-block text-lg text-sky-300 hover:text-sky-200"
                >
                  vishal630488@gmail.com
                </a>
              </li>

              <li>
                <span className="block text-xs tracking-widest text-white/50">
                  LINKEDIN
                </span>
                <a
                  href="https://www.linkedin.com/in/vishal-kumar-11s10v20"
                  target="_blank"
                  className="mt-1 inline-block text-lg text-sky-300 hover:text-sky-200"
                >
                  linkedin.com/in/vishal-kumar-11s10v20
                </a>
              </li>

              <li>
                <span className="block text-xs tracking-widest text-white/50">
                  GITHUB
                </span>
                <a
                  href="https://github.com/vis-alin"
                  target="_blank"
                  className="mt-1 inline-block text-lg text-sky-300 hover:text-sky-200"
                >
                  github.com/vis-alin
                </a>
              </li>

            </ul>
          </div>

          {/* COMMUNICATION STANDARDS */}
          <div className="rounded-xl border border-white/10 bg-white/[0.035] backdrop-blur-xl px-10 py-10">
            <h2 className="text-sm tracking-widest text-white/60">
              COMMUNICATION STANDARDS
            </h2>

            <ul className="mt-6 space-y-4 text-white/80 leading-relaxed text-sm">
              <li>• Professional and context-rich communication preferred</li>
              <li>• Open to cybersecurity research and technical discussion</li>
              <li>• Responsible disclosure and ethical engagement only</li>
              <li>• Community collaboration and knowledge sharing welcomed</li>
            </ul>

            <p className="mt-6 text-xs text-white/60 leading-relaxed">
              Unsolicited marketing, spam, or unethical requests will not be
              acknowledged.
            </p>
          </div>

        </section>

      </div>
    </main>
  )
}
