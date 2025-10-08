interface HeaderProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
}

const Header = ({ navigateTo }: HeaderProps) => {
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

