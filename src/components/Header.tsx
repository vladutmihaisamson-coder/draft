import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import Logo from './Logo'
import Dropdown from './Dropdown'
import Modal from './Modal'

interface HeaderProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
  isScrolled?: boolean
}

const Header = ({ navigateTo, isScrolled = false }: HeaderProps) => {
  const sentinelRef = useRef<HTMLDivElement | null>(null)
  const [observedScrolled, setObservedScrolled] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // Robust cross-browser scroll detection using IntersectionObserver
  useEffect(() => {
    if (!sentinelRef.current || typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        // When sentinel is NOT intersecting, we consider the page scrolled
        setObservedScrolled(!entry.isIntersecting)
      },
      {
        root: null,
        threshold: 1,
      }
    )
    observer.observe(sentinelRef.current)
    return () => observer.disconnect()
  }, [])
  const handleNavigation = (page: string) => {
    if (navigateTo) {
      navigateTo(page)
    }
  }

  const effectiveScrolled = isScrolled || observedScrolled
  const headerClassName = `header ${effectiveScrolled ? 'header--scrolled' : 'header--at-top'}`
  
  return (
    <>
      {/* Sentinel placed before sticky header to detect crossing the top */}
      <div ref={sentinelRef} aria-hidden="true" className="header-sentinel" />
      <header className={headerClassName}>
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

          {/* Dashboard Link */}
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

          {/* Separator */}
          <div className="header-separator" />

          {/* Navigation Links */}
          <nav className="header-nav">
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
            <a 
              href="#" 
              className="header-nav-item"
              onClick={(e) => {
                e.preventDefault()
                handleNavigation('organization-settings')
              }}
            >
              Organization Settings
            </a>
          </nav>
        </div>

        {/* Right side - Auth buttons */}
        <div className="header-actions">
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
            onClick={() => setIsLoginModalOpen(true)}
          >
            Staff Login
          </Button>
        </div>
      </div>
      </header>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        title="Staff Login"
        size="md"
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)'
        }}>
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--medical-02)',
            lineHeight: 'var(--line-height-normal)',
            margin: 0
          }}>
            This is a placeholder for the Staff Login form. The form would include fields for:
          </p>
          
          <ul style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--medical-02)',
            lineHeight: 'var(--line-height-normal)',
            margin: 0,
            paddingLeft: 'var(--space-4)'
          }}>
            <li>Email Address</li>
            <li>Password</li>
            <li>Remember Me checkbox</li>
            <li>Forgot Password link</li>
          </ul>

          <div style={{
            display: 'flex',
            gap: 'var(--space-3)',
            justifyContent: 'flex-end',
            marginTop: 'var(--space-4)',
            paddingTop: 'var(--space-4)',
            borderTop: '1px solid var(--medical-07)'
          }}>
            <Button
              variant="secondary"
              onClick={() => setIsLoginModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                alert('Login would be processed here')
                setIsLoginModalOpen(false)
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Header

