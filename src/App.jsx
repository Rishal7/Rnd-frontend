import { Routes, Route } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ProductsPage } from './pages/ProductsPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'

/**
 * Demo SPA: polished UI with intentional accessibility issues for Lighthouse training.
 */
function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/atelier" element={<ProductsPage />} />
        <Route path="/reach" element={<ContactPage />} />
      </Routes>
    </SiteLayout>
  )
}

export default App
