export default function ArticlesPage() {
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
            absolute top-[26%] left-1/2 -translate-x-1/2
            h-[32rem] w-[32rem]
            bg-gradient-to-br from-indigo-400/10 via-sky-400/6 to-transparent
            blur-[160px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl space-y-24">

        {/* HEADER */}
        <section>
          <p className="text-xs tracking-[0.35em] text-white/50">
            FIELD NOTES & OPERATIONAL INSIGHTS
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-medium">
            Articles & Research Notes
          </h1>

          <p className="mt-4 max-w-3xl text-white/70 leading-relaxed">
            Long-form observations shaped by red teaming, defensive operations,
            and real-world security failures. Written to capture how systems
            actually break — and how they can be fixed.
          </p>

          <div className="mt-6 h-px w-40 bg-gradient-to-r from-white/40 to-transparent" />
        </section>

        {/* ARTICLES */}
        <section className="space-y-24">

          {/* ARTICLE 1 */}
          <article className="relative border-l border-white/20 pl-10">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-white/60" />

            <p className="text-xs tracking-widest text-white/50">
              RED TEAM THINKING
            </p>

            <h2 className="mt-3 text-2xl font-medium">
              Why Attackers Rarely Use the Most Complex Technique
            </h2>

            <p className="mt-5 max-w-4xl text-white/80 leading-relaxed">
              In red team exercises and real incidents alike, successful
              compromises usually begin with the simplest possible weakness.
              Exposed services, weak authentication, or overlooked
              misconfigurations consistently outperform advanced exploits.
            </p>

            <details className="group mt-6 max-w-4xl">
              <summary className="cursor-pointer text-sm text-sky-300 hover:text-sky-200">
                Read more →
              </summary>

              <div className="mt-4 space-y-4 text-white/80 leading-relaxed">
                <p>
                  From an attacker’s perspective, efficiency matters more than
                  sophistication. If access can be gained through a poorly
                  secured service or reused credentials, there is little reason
                  to deploy complex tooling.
                </p>

                <p>
                  This mindset is valuable for defenders. By thinking like an
                  attacker and identifying the most likely paths of least
                  resistance, security teams can prioritize fixes that remove
                  entire attack classes rather than chasing individual alerts.
                </p>

                <p>
                  Strong security programs focus first on eliminating trivial
                  access paths, improving visibility, and validating that basic
                  controls actually work under real conditions.
                </p>
              </div>
            </details>

            <div className="mt-6 text-sm text-white/60">
              Focus: Red Teaming • Attack Paths • Defensive Prioritization
            </div>
          </article>

          {/* ARTICLE 2 */}
          <article className="relative border-l border-white/20 pl-10">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-white/60" />

            <p className="text-xs tracking-widest text-white/50">
              BLUE TEAM OPERATIONS
            </p>

            <h2 className="mt-3 text-2xl font-medium">
              Alert Fatigue Is a Detection Design Failure
            </h2>

            <p className="mt-5 max-w-4xl text-white/80 leading-relaxed">
              SOC teams rarely fail due to lack of data. They fail when analysts
              are buried under low-quality alerts that obscure real risk.
            </p>

            <details className="group mt-6 max-w-4xl">
              <summary className="cursor-pointer text-sm text-sky-300 hover:text-sky-200">
                Read more →
              </summary>

              <div className="mt-4 space-y-4 text-white/80 leading-relaxed">
                <p>
                  Alert fatigue is often framed as a human problem, but it is
                  fundamentally a design issue. Detections that trigger on raw
                  activity instead of meaningful behavior create noise, not
                  security.
                </p>

                <p>
                  Effective detection engineering requires clarity: What threat
                  does this alert represent? What decision should an analyst
                  make when it fires? If those answers are unclear, the alert
                  does more harm than good.
                </p>

                <p>
                  Red team testing plays a critical role here. When detections
                  are validated against realistic adversary behavior, teams can
                  refine logic to improve signal quality and analyst confidence.
                </p>
              </div>
            </details>

            <div className="mt-6 text-sm text-white/60">
              Focus: SOC Operations • Detection Engineering • Signal Quality
            </div>
          </article>

          {/* ARTICLE 3 */}
          <article className="relative border-l border-white/20 pl-10">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-white/60" />

            <p className="text-xs tracking-widest text-white/50">
              ADVERSARY INFRASTRUCTURE
            </p>

            <h2 className="mt-3 text-2xl font-medium">
              What Network Traffic Still Reveals in Modern Attacks
            </h2>

            <p className="mt-5 max-w-4xl text-white/80 leading-relaxed">
              Despite advances in endpoint evasion, attackers cannot avoid
              network communication. Command-and-control, lateral movement, and
              data exfiltration all leave observable traces.
            </p>

            <details className="group mt-6 max-w-4xl">
              <summary className="cursor-pointer text-sm text-sky-300 hover:text-sky-200">
                Read more →
              </summary>

              <div className="mt-4 space-y-4 text-white/80 leading-relaxed">
                <p>
                  From a red team perspective, the challenge is blending into
                  normal traffic patterns. From a defensive perspective, this
                  makes baseline understanding essential.
                </p>

                <p>
                  Network defense is most effective when teams focus on
                  deviations from expected behavior rather than relying solely
                  on known-bad indicators or signatures.
                </p>

                <p>
                  Traffic analysis, when combined with system context, often
                  provides the earliest warning signs of compromise — long
                  before endpoint alerts escalate.
                </p>
              </div>
            </details>

            <div className="mt-6 text-sm text-white/60">
              Focus: Network Visibility • Adversary Behavior • Early Detection
            </div>
          </article>

        </section>

      </div>
    </main>
  )
}
