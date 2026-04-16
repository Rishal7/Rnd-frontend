import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }) =>
  `text-sm tracking-[0.2em] uppercase transition-colors duration-300 ${
    isActive ? 'text-(--gold)' : 'text-(--text-muted-hover-focus) hover:text-(--mist-enhanced)'
  }`

export function SiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b border-(--border-subtle) bg-(--bg-elevated)/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <NavLink to="/" className="group flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-(--gold) transition-transform duration-300 group-hover:scale-150" />
            <span className="text-lg font-light tracking-[0.35em] text-black">AURUM</span>
          </NavLink>
          <div className="flex gap-10">
            <NavLink to="/" className={linkClass} end>
              Index
            </NavLink>
            <NavLink to="/atelier" className={linkClass}>
              Atelier
            </NavLink>
            <NavLink to="/reach" className={linkClass}>
              Reach
            </NavLink>
          </div>
        </div>
      </div>
      {/* Intentionally no <main> landmark for Lighthouse */}
      <div className="flex-1">{children}</div>
      <div className="border-t border-(--border-subtle) py-8 text-center text-xs text-gray-700">
        © AURUM STUDIO — crafted silence
      </div>
    </div>
  )
}