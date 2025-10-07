interface HeaderProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
}

const Header = ({ navigateTo, hasClerk = false }: HeaderProps) => {
  const handleNavigation = (page: string) => {
    if (navigateTo) {
      navigateTo(page)
    }
  }

  return (
    <header style={{
      width: '100%',
      background: 'var(--shade-10)',
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxSizing: 'border-box'
    }}>
      {/* Logo placeholder */}
      <div style={{
        width: '120px',
        height: '32px',
        background: 'var(--shade-07)',
        borderRadius: 'var(--radius-small)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--shade-03)',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 'var(--font-weight-medium)',
        cursor: 'pointer'
      }}
      onClick={() => handleNavigation('home')}
      >
        LOGO
      </div>

      {/* Right side wrapper - Navigation links and button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)' // 12px gap between nav and button
      }}>
        {/* Navigation links */}
        <nav style={{
          display: 'flex',
          gap: 'var(--space-3)', // 12px gap between links
          alignItems: 'center'
        }}>
          <a 
            href="#" 
            style={{
              color: 'var(--shade-01)',
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-small)',
              transition: 'background-color 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--shade-08)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('home')
            }}
          >
            Home
          </a>
          <a 
            href="#" 
            style={{
              color: 'var(--shade-01)',
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-small)',
              transition: 'background-color 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--shade-08)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('about')
            }}
          >
            About
          </a>
          <a 
            href="#" 
            style={{
              color: 'var(--shade-01)',
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-small)',
              transition: 'background-color 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--shade-08)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('services')
            }}
          >
            Services
          </a>
          <a 
            href="#" 
            style={{
              color: 'var(--shade-01)',
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-small)',
              transition: 'background-color 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--shade-08)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('settings')
            }}
          >
            Settings
          </a>
          <a 
            href="#" 
            style={{
              color: 'var(--shade-01)',
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-small)',
              transition: 'background-color 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--shade-08)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('admin')
            }}
          >
            Admin
          </a>
          <a 
            href="#" 
            style={{
              color: 'var(--shade-01)',
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-small)',
              transition: 'background-color 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--shade-08)'}
            onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('tabs')
            }}
          >
            Tabs
          </a>
        </nav>

        {/* Auth */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <button
            className="btn btn-secondary"
            onClick={() => handleNavigation('playground')}
          >
            Playground
          </button>
          <button className="btn btn-primary">Sign In</button>
        </div>
      </div>
    </header>
  )
}

export default Header

// Clerk auth buttons component
const ClerkAuthButtons = () => {
  const { SignedIn, SignedOut, SignInButton, UserButton } = require('@clerk/clerk-react')
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal" />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  )
}

// Clerk admin link component
const ClerkAdminLink = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const { SignedIn, useUser } = require('@clerk/clerk-react')
  const { user, isLoaded } = useUser()
  if (!isLoaded) return null
  const publicMeta = (user?.publicMetadata as Record<string, unknown> | undefined) || {}
  const role = typeof publicMeta.role === 'string' ? publicMeta.role : undefined
  const adminKeyStr = typeof (publicMeta as any).admin === 'string' ? (publicMeta as any).admin : undefined
  const adminKeyBool = typeof (publicMeta as any).admin === 'boolean' ? (publicMeta as any).admin : false
  const orgAdminRaw = (publicMeta as any)['org:admin']
  const orgAdminFlag = orgAdminRaw === true || (typeof orgAdminRaw === 'string' && orgAdminRaw.toLowerCase() === 'true')
  const isAdmin = (
    (role && role.toLowerCase() === 'admin') ||
    (adminKeyStr && adminKeyStr.toLowerCase() === 'admin') ||
    adminKeyBool === true ||
    orgAdminFlag
  )
  if (!isAdmin) return null
  return (
    <SignedIn>
      <a 
        href="#" 
        style={{
          color: 'var(--shade-01)',
          textDecoration: 'none',
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-medium)',
          padding: 'var(--space-2) var(--space-3)',
          borderRadius: 'var(--radius-small)',
          transition: 'background-color 0.2s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'var(--shade-08)'}
        onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
        onClick={(e) => {
          e.preventDefault()
          onNavigate('admin')
        }}
      >
        Admin
      </a>
    </SignedIn>
  )
}