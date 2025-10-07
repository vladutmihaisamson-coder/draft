import { useEffect, useState } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import TabsPage from '../pages/Tabs'
import Admin from '../pages/Admin'
import Settings from '../pages/Settings'
import Playground from '../pages/Playground'

type Page = 'home' | 'about' | 'services' | 'settings' | 'tabs' | 'admin' | 'playground'

const validPages: Page[] = ['home', 'about', 'services', 'settings', 'tabs', 'admin', 'playground']
const isPage = (value: string | null | undefined): value is Page => {
  return typeof value === 'string' && (validPages as string[]).includes(value)
}

const Router = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    // Prefer URL hash if it matches a known page, else fall back to stored page
    const hash = window.location.hash.replace(/^#/, '')
    if (isPage(hash)) return hash
    const stored = localStorage.getItem('currentPage')
    if (isPage(stored)) return stored
    return 'home'
  })

  const navigateTo = (page: Page) => {
    setCurrentPage(page)
    try {
      localStorage.setItem('currentPage', page)
    } catch {}
    // Keep the URL hash in sync so refresh/back/forward behave predictably
    if (window.location.hash.replace(/^#/, '') !== page) {
      window.location.hash = page
    }
  }

  // Sync with hash changes (e.g., browser back/forward)
  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash.replace(/^#/, '')
      if (isPage(next)) {
        setCurrentPage(next)
        try {
          localStorage.setItem('currentPage', next)
        } catch {}
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Pass navigation function to all pages
  const navigationProps = { navigateTo }

  switch (currentPage) {
    case 'home':
      return <Home {...navigationProps} />
    case 'about':
      return <About {...navigationProps} />
    case 'services':
      return <Services {...navigationProps} />
    case 'settings':
      return <Settings {...navigationProps} />
    case 'tabs':
      return <TabsPage {...navigationProps} />
    case 'admin':
      return <Admin {...navigationProps} />
    case 'playground':
      return <Playground {...navigationProps} />
    default:
      return <Home {...navigationProps} />
  }
}

export default Router
