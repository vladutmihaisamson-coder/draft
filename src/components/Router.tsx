import { useEffect, useState } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import TabsPage from '../pages/Tabs'
import Admin from '../pages/Admin'
import Settings from '../pages/Settings'
import OrganizationSettings from '../pages/OrganizationSettings'
import Playground from '../pages/Playground'

interface RouterProps {
  hasClerk?: boolean
}

type Page = 'home' | 'about' | 'services' | 'settings' | 'organization-settings' | 'tabs' | 'admin' | 'playground'

const validPages: Page[] = ['home', 'about', 'services', 'settings', 'organization-settings', 'tabs', 'admin', 'playground']
const isPage = (value: string | null | undefined): value is Page => {
  return typeof value === 'string' && (validPages as string[]).includes(value)
}

const Router = ({ hasClerk = false }: RouterProps) => {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    // Prefer URL hash if it matches a known page, else fall back to stored page
    const hash = window.location.hash.replace(/^#/, '')
    if (isPage(hash)) return hash
    const stored = localStorage.getItem('currentPage')
    if (isPage(stored)) return stored
    return 'home'
  })

  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll detection at the app level
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const shouldBeScrolled = scrollTop > 0
      setIsScrolled(shouldBeScrolled)
    }

    // Check initial scroll position
    const initialScroll = window.scrollY || document.documentElement.scrollTop
    setIsScrolled(initialScroll > 0)

    // Use both scroll and wheel events
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  const navigateTo = (page: Page) => {
    setCurrentPage(page)
    try {
      localStorage.setItem('currentPage', page)
    } catch {
      // Ignore localStorage errors
    }
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
        } catch {
          // Ignore localStorage errors
        }
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Pass navigation function and scroll state to all pages
  const navigationProps = { 
    navigateTo: navigateTo as (page: string) => void, 
    hasClerk, 
    isScrolled,
    // Add manual toggle for testing
    toggleScroll: () => {
      console.log('Manual toggle from Router')
      setIsScrolled(!isScrolled)
    }
  }

  switch (currentPage) {
    case 'home':
      return <Home {...navigationProps} />
    case 'about':
      return <About {...navigationProps} />
    case 'services':
      return <Services {...navigationProps} />
    case 'settings':
      return <Settings {...navigationProps} />
    case 'organization-settings':
      return <OrganizationSettings {...navigationProps} />
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
