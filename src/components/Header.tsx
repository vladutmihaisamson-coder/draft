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
    <header className="header">
      <div className="header-content">
        {/* Left side - Logo and Navigation */}
        <div className="header-left">
          {/* Logo */}
          <div className="header-logo" onClick={() => handleNavigation('home')}>
            <Logo size={28} />
            <span>MedCare</span>
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
          <div className="header-separator" />

          {/* Navigation Links */}
          <nav className="header-nav">
            <a 
              href="#" 
              className="header-nav-item"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('home')
              }}
            >
              Dashboard
            </a>
            <a 
              href="#" 
              className="header-nav-item"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('admin')
              }}
            >
              Staff Management
            </a>
            <a 
              href="#" 
              className="header-nav-item"
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

        {/* Right side - Auth buttons */}
        <div className="header-actions">
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

