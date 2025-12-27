export default function CertificationsPage() {
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
          bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
          bg-[size:48px_48px]
        "
      />

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute top-[25%] left-1/2 -translate-x-1/2
            h-[30rem] w-[30rem]
            bg-gradient-to-br from-sky-400/10 via-indigo-400/6 to-transparent
            blur-[160px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-24">

        {/* HEADER */}
        <section>
          <p className="text-xs tracking-[0.35em] text-white/50">
            CREDENTIAL VERIFICATION
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-medium">
            Certifications
          </h1>

          <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
            The following credentials represent structured training, verified
            completion, and practical exposure aligned with enterprise
            cybersecurity and engineering workflows.
          </p>

          <div className="mt-6 h-px w-40 bg-gradient-to-r from-white/40 to-transparent" />
        </section>

        {/* CERTIFICATE ENTRIES */}
        <section className="space-y-20">

          {/* ITEM */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
            <iframe
              src="/certificates/ethical%20hacker.pdf"
              className="h-[420px] w-full rounded-lg border border-white/10 bg-black"
            />

            <div className="space-y-4">
              <h2 className="text-lg font-medium">
                Ethical Hacker
              </h2>

              <p className="text-white/60">
                Cisco Networking Academy
              </p>

              <p className="text-white/80 leading-relaxed">
                Focused on adversary methodologies, exploitation techniques,
                and system weaknesses, with strong emphasis on responsible
                testing, ethical boundaries, and defensive awareness.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>• Adversary thinking & attack patterns</li>
                <li>• System and application exposure</li>
                <li>• Security testing within legal scope</li>
              </ul>

              <a
                href="/certificates/ethical%20hacker.pdf"
                target="_blank"
                className="inline-block pt-3 text-sm text-sky-300 hover:text-sky-200"
              >
                Open certificate →
              </a>
            </div>
          </div>

          {/* ITEM */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
            <iframe
              src="/certificates/security%20analyst.pdf"
              className="h-[420px] w-full rounded-lg border border-white/10 bg-black"
            />

            <div className="space-y-4">
              <h2 className="text-lg font-medium">
                Cybersecurity Analyst Job Simulation
              </h2>

              <p className="text-white/60">
                Tata Group — Forage
              </p>

              <p className="text-white/80 leading-relaxed">
                Simulated real-world analyst workflows including threat
                identification, risk assessment, and defensive decision-making
                within enterprise security environments.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>• Security monitoring & investigation</li>
                <li>• Risk-based analysis</li>
                <li>• Incident response mindset</li>
              </ul>

              <a
                href="/certificates/security%20analyst.pdf"
                target="_blank"
                className="inline-block pt-3 text-sm text-sky-300 hover:text-sky-200"
              >
                Open certificate →
              </a>
            </div>
          </div>

          {/* ITEM */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
            <iframe
              src="/certificates/software%20engineering.pdf"
              className="h-[420px] w-full rounded-lg border border-white/10 bg-black"
            />

            <div className="space-y-4">
              <h2 className="text-lg font-medium">
                Software Engineering Job Simulation
              </h2>

              <p className="text-white/60">
                JPMorgan Chase & Co. — Forage
              </p>

              <p className="text-white/80 leading-relaxed">
                Covered secure development workflows, enterprise software
                design, and system-level thinking used in financial
                institutions.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>• Secure coding practices</li>
                <li>• Data integrity & validation</li>
                <li>• Production-grade engineering</li>
              </ul>

              <a
                href="/certificates/software%20engineering.pdf"
                target="_blank"
                className="inline-block pt-3 text-sm text-sky-300 hover:text-sky-200"
              >
                Open certificate →
              </a>
            </div>
          </div>

          {/* ITEM */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 items-start">
            <iframe
              src="/certificates/network%20basics.pdf"
              className="h-[420px] w-full rounded-lg border border-white/10 bg-black"
            />

            <div className="space-y-4">
              <h2 className="text-lg font-medium">
                Networking Fundamentals
              </h2>

              <p className="text-white/60">
                Cisco Networking Academy
              </p>

              <p className="text-white/80 leading-relaxed">
                Built foundational knowledge in routing, switching, IPv4/IPv6
                addressing, and network design essential for secure and
                resilient systems.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>• Network architecture basics</li>
                <li>• Addressing & routing concepts</li>
                <li>• Security-aware networking</li>
              </ul>

              <a
                href="/certificates/network%20basics.pdf"
                target="_blank"
                className="inline-block pt-3 text-sm text-sky-300 hover:text-sky-200"
              >
                Open certificate →
              </a>
            </div>
          </div>

        </section>

      </div>
    </main>
  )
}
