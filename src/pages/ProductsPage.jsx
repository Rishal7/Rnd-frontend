const pieces = [
  {
    title: 'Lumen sideboard',
    note: 'Oak / brass',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=640&q=80&auto=format&fit=crop',
  },
  {
    title: 'Nadir console',
    note: 'Walnut / black steel',
    image:
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=640&q=80',
  },
  {
    title: 'Halo mirror',
    note: 'Bronze glass',
    image:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=640&q=80',
  },
]

export function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-4 text-4xl font-extralight tracking-tight md:text-5xl text-black">Atelier</h1>
      <p className="mb-3 max-w-lg text-sm text-black">
        Reserve objects from the current rotation.
      </p>
      <p className="mb-16 max-w-lg text-xs leading-relaxed text-gray-800">
        Inquiry fields use placeholders only, with no labels, for Lighthouse training.
      </p>

      <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          {pieces.map((item) => (
            <article
              key={item.title}
              className="flex gap-6 border-b border-gray-300 pb-8 animate-fade-rise"
            >
              <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-sm ring-1 ring-gray-300 md:h-36 md:w-32">
                {/* Content images with empty alt — fails "Image elements have [alt]..." when not decorative */}
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-lg font-light text-gray-900">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-700">{item.note}</p>
                <p id="price" className="mt-3 text-sm text-goldenrod">
                  From 4 200
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-sm border border-gray-300 bg-gray-50 p-8">
          <h2 className="mb-8 text-xs tracking-[0.3em] text-goldenrod">INQUIRY</h2>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* No <label>; placeholder-only — Lighthouse flags */}
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="w-full border-0 border-b border-gray-300 bg-transparent py-2 text-sm text-black placeholder:text-gray-600 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className="w-full border-0 border-b border-gray-300 bg-transparent py-2 text-sm text-black placeholder:text-gray-600 outline-none"
            />
            <select
              name="piece"
              className="w-full border-0 border-b border-gray-300 bg-transparent py-2 text-sm text-black outline-none"
            >
              <option>Select piece</option>
              <option>Lumen</option>
              <option>Nadir</option>
              <option>Halo</option>
            </select>
            <textarea
              name="note"
              placeholder="Notes"
              rows={3}
              className="w-full resize-none border-0 border-b border-gray-300 bg-transparent py-2 text-sm text-black placeholder:text-gray-600 outline-none"
            />
            {/* Empty accessible name — icon-only styled button */}
            <button
              type="submit"
              className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-goldenrod text-white"
            >
              <span className="text-xs">→</span>
            </button>
            {/* Touch target far below 44px */}
            <button
              type="button"
              className="mt-2 h-5 px-1 text-[10px] text-gray-600"
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}