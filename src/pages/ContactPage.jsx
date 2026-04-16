export function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-4 text-4xl font-extralight tracking-tight md:text-5xl">Reach</h1>
      <p className="mb-12 max-w-xl text-sm text-(--text-muted)">
        Our atelier answers within two moons. The map below is decorative markup without a text alternative.
      </p>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,300px)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-10 lg:gap-y-8">
        <div className="overflow-hidden rounded-sm border border-(--border-subtle) bg-(--bg-card) card-hover lg:col-start-1 lg:row-start-1">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=960&q=80&auto=format&fit=crop"
            alt=""
            className="h-36 w-full object-cover opacity-88 sm:h-40"
            loading="lazy"
          />
          <div className="p-8">
            <h3 className="text-xl font-light">Studio</h3>
            <p className="mt-4 text-sm leading-relaxed text-(--text-primary)">
              14 Riverbend Lane
              <br />
              Hudson Valley
            </p>
            <div className="mt-6 flex items-center gap-6">
              <a href="https://example.com" className="text-(--gold)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              <a href="#" className="text-sm text-(--primary) underline">
                click here
              </a>
            </div>
          </div>
        </div>

        <aside className="flex flex-col rounded-sm border border-(--border-subtle) bg-(--bg-card) p-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-0">
          <h3 className="mb-6 text-xs tracking-[0.3em] text-(--gold)">HOURS</h3>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-(--border-subtle)">
                <td className="py-3 text-(--text-primary)">Mon — Thu</td>
                <td className="py-3 text-right text-(--primary)">10 — 18</td>
              </tr>
              <tr className="border-b border-(--border-subtle)">
                <td className="py-3 text-(--text-primary)">Fri</td>
                <td className="py-3 text-right text-(--primary)">By request</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-auto border-t border-(--border-subtle) pt-6 text-xs text-(--text-primary)">
            Visits by appointment.
          </p>
        </aside>

        <div className="overflow-hidden rounded-sm border border-(--border-subtle) bg-(--bg-card) lg:col-start-1 lg:row-start-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=960&q=80&auto=format&fit=crop"
              alt=""
              className="h-40 w-full object-cover opacity-75 sm:h-44"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--bg-deep)/85 via-transparent to-(--bg-deep)/25"
              aria-hidden="true"
            />
          </div>
          <p className="border-t border-(--border-subtle) px-4 py-3 text-center text-[10px] tracking-[0.28em] text-(--gold)">
            REGION · HUDSON VALLEY
          </p>
        </div>
      </div>
    </div>
  )
}