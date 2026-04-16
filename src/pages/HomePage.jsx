import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <p className="animate-fade-rise mb-6 text-xs tracking-[0.35em]" style={{ color: '#8B6508' }}>EST. MMXXIV</p>
        <h1 className="animate-fade-rise animate-delay-1 mb-4 max-w-3xl text-4xl font-extralight leading-tight tracking-tight md:text-6xl">
          Objects for calm <span className="hero-shimmer">interiors</span>
        </h1>
        <h2 className="animate-fade-rise animate-delay-2 mb-12 max-w-xl text-lg font-light" style={{ color: '#333333' }}>
          Quiet forms, honest materials, and light that lingers — a private collection for those who notice.
        </h2>

        <div className="animate-fade-rise animate-delay-3 mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative overflow-hidden rounded-sm border border-(--border-subtle) bg-(--bg-card) card-hover">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt=""
              className="h-64 w-full object-cover opacity-90"
            />
            <div className="p-8">
              <p className="text-sm leading-relaxed" style={{ color: '#2C2C2C' }}>
                Each piece is shaped in our northern workshop. The grain tells the story; we only listen.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="float-orb rounded-sm border border-(--border-subtle) bg-(--bg-elevated) p-10 card-hover">
              <p className="mb-4 text-xs tracking-[0.25em]" style={{ color: '#8B6508' }}>SIGNATURE</p>
              <p className="text-2xl font-extralight" style={{ color: '#333333' }}>Lumen sideboard</p>
              <p className="mt-3 text-sm" style={{ color: '#333333' }}>Oak, brass, silence.</p>
            </div>
            <div
              className="cta-pulse cursor-pointer rounded-sm border border-(--gold) bg-(--gold)/10 px-8 py-4 text-center text-sm tracking-widest"
              style={{ color: '#8B6508' }}
              onClick={() => (window.location.href = '/atelier')}
              role="button"
              tabIndex="0"
              aria-label="Enter atelier"
            >
              Enter atelier
            </div>
            <Link
              to="/reach"
              className="text-center text-sm underline-offset-4 hover:underline"
              style={{ color: '#1A1A1A' }} // Adjusted text color for better contrast
            >
              Request a conversation
            </Link>
            <p className="text-xs" style={{ color: '#333333' }}>
              Private viewing by appointment.
            </p>
          </div>
        </div>

        <div id="featured" className="mb-4 text-xs tracking-[0.3em]" style={{ color: '#8B6508' }}>FEATURED</div>
        <p className="max-w-2xl text-sm" style={{ color: '#333333', opacity: 0.9 }}>
          Duplicate id attributes confuse assistive tech and fail parsing.
        </p>
      </div>
    </div>
  )
}