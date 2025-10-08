import Button from './Button'
import Logo from './Logo'
import Dropdown from './Dropdown'

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
      {/* Logo and Navigation */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-6)'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          color: 'var(--medical-primary)',
          cursor: 'pointer'
        }}
        onClick={() => handleNavigation('home')}
        >
          <Logo size={28} />
          <span style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--medical-01)'
          }}>
            MedCare
          </span>
        </div>

        {/* Location/Organization Dropdown */}
        <Dropdown
          label="City General Hospital"
          items={[
            {
              label: 'City General Hospital',
              onClick: () => console.log('Selected: City General Hospital')
            },
            {
              label: 'Metropolitan Medical Center',
              onClick: () => console.log('Selected: Metropolitan Medical Center')
            },
            {
              label: 'Regional Health Clinic',
              onClick: () => console.log('Selected: Regional Health Clinic')
            },
            {
              label: 'University Medical Center',
              onClick: () => console.log('Selected: University Medical Center')
            },
            {
              label: 'Children\'s Hospital',
              onClick: () => console.log('Selected: Children\'s Hospital')
            },
            {
              label: 'Emergency Care Facility',
              onClick: () => console.log('Selected: Emergency Care Facility')
            },
            {
              label: 'Specialty Medical Group',
              onClick: () => console.log('Selected: Specialty Medical Group')
            },
            {
              label: 'Community Health Center',
              onClick: () => console.log('Selected: Community Health Center')
            }
          ]}
        />

        {/* Separator */}
        <div style={{
          width: '1px',
          height: '24px',
          background: 'var(--medical-07)',
          margin: '0 var(--space-2)'
        }} />

        {/* Navigation Links */}
        <nav style={{
          display: 'flex',
          gap: 'var(--space-3)',
          alignItems: 'center'
        }}>
          <a 
            href="#" 
            style={{
              color: 'var(--medical-02)',
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-small)',
              transition: 'all var(--transition-normal)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--medical-primary)'
              e.currentTarget.style.background = 'var(--medical-08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medical-02)'
              e.currentTarget.style.background = 'transparent'
            }}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('home')
            }}
          >
            Dashboard
          </a>
          <a 
            href="#" 
            style={{
              color: 'var(--medical-02)',
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-small)',
              transition: 'all var(--transition-normal)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--medical-primary)'
              e.currentTarget.style.background = 'var(--medical-08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medical-02)'
              e.currentTarget.style.background = 'transparent'
            }}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('admin')
            }}
          >
            Staff Management
          </a>
          <a 
            href="#" 
            style={{
              color: 'var(--medical-02)',
              textDecoration: 'none',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-medium)',
              padding: 'var(--space-2) var(--space-3)',
              borderRadius: 'var(--radius-small)',
              transition: 'all var(--transition-normal)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--medical-primary)'
              e.currentTarget.style.background = 'var(--medical-08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--medical-02)'
              e.currentTarget.style.background = 'transparent'
            }}
            onClick={(e) => {
              e.preventDefault()
              handleNavigation('tabs')
            }}
          >
            Appointments
          </a>
          
          {/* More Dropdown */}
          <Dropdown
            label="More"
            items={[
              {
                label: 'About Us',
                onClick: () => handleNavigation('about')
              },
              {
                label: 'Medical Services',
                onClick: () => handleNavigation('services')
              },
              {
                label: 'Patient Records',
                onClick: () => handleNavigation('settings')
              }
            ]}
          />
        </nav>
      </div>

      {/* Right side wrapper - Auth buttons */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)' // 12px gap between nav and button
      }}>

        {/* Auth */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Button
            variant="secondary"
            icon="bell"
            iconPosition="left"
            onClick={() => handleNavigation('playground')}
          >
            Emergency
          </Button>
          <Button 
            variant="primary"
            icon="user"
            iconPosition="left"
          >
            Staff Login
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header

