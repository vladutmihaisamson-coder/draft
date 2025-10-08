import { useState } from 'react'
import Header from '../components/Header'
import TextField from '../components/TextField'
import Checkbox from '../components/Checkbox'
import Select from '../components/Select'
import TitledField from '../components/TitledField'
import Button from '../components/Button'

interface SettingsProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
  isScrolled?: boolean
}

const Settings = ({ navigateTo, hasClerk = false, isScrolled = false }: SettingsProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    medicalLicense: '',
    notifications: true,
    theme: 'light',
    language: 'en'
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100vw',
      background: 'var(--medical-08)',
      margin: 0,
      padding: 0
    }}>
      <Header navigateTo={navigateTo} hasClerk={hasClerk} isScrolled={isScrolled} />
      
      {/* Content section */}
      <section style={{
        padding: 'var(--space-8)', // 32px padding
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}>
        <div style={{
          maxWidth: 'var(--max-width)', // 960px max width
          width: '100%'
        }}>
            <h1 style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--medical-01)',
              marginBottom: 'var(--space-6)'
            }}>
              Medical Staff Settings
            </h1>
          
          <p style={{
            fontFamily: 'var(--font-family-primary)',
            fontSize: 'var(--font-size-base)',
            color: 'var(--medical-02)',
            lineHeight: 'var(--line-height-normal)',
            marginBottom: 'var(--space-8)',
            maxWidth: '600px'
          }}>
            Manage your medical staff profile, department information, and system preferences. Update your medical license and notification settings.
          </p>

          {/* Main content container with white background */}
          <div style={{
            background: 'var(--medical-10)',
            borderRadius: 'var(--radius-medium)',
            padding: 'var(--space-8)',
            marginBottom: 'var(--space-8)'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--medical-01)',
              marginBottom: 'var(--space-6)'
            }}>
              Medical Professional Information
            </h2>

            {/* Form Fields */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-8)'
            }}>
              <TextField
                label="First Name"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(value) => handleInputChange('firstName', value)}
                size="md"
              />
              
              <TextField
                label="Last Name"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(value) => handleInputChange('lastName', value)}
                size="md"
              />
              
              <TextField
                label="Email Address"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(value) => handleInputChange('email', value)}
                type="email"
                size="md"
              />
              
              <TextField
                label="Phone Number"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(value) => handleInputChange('phone', value)}
                type="text"
                size="md"
              />
              
              <TextField
                label="Department"
                placeholder="Enter your medical department"
                value={formData.department}
                onChange={(value) => handleInputChange('department', value)}
                size="md"
              />
              
              <TextField
                label="Medical License"
                placeholder="Enter your medical license number"
                value={formData.medicalLicense}
                onChange={(value) => handleInputChange('medicalLicense', value)}
                size="md"
              />
            </div>

            {/* Preferences Section */}
            <h2 style={{
              fontFamily: 'var(--font-family-primary)',
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--medical-01)',
              marginBottom: 'var(--space-6)',
              marginTop: 'var(--space-8)'
            }}>
              System Preferences
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-8)'
            }}>
              <TitledField label="Theme">
                <Select
                  value={formData.theme}
                  onChange={(value) => handleInputChange('theme', value)}
                  options={[
                    { value: 'light', label: 'Light' },
                    { value: 'dark', label: 'Dark' },
                    { value: 'auto', label: 'Auto' }
                  ]}
                  size="md"
                />
              </TitledField>

              <TitledField label="Language">
                <Select
                  value={formData.language}
                  onChange={(value) => handleInputChange('language', value)}
                  options={[
                    { value: 'en', label: 'English' },
                    { value: 'es', label: 'Spanish' },
                    { value: 'fr', label: 'French' },
                    { value: 'de', label: 'German' }
                  ]}
                  size="md"
                />
              </TitledField>
            </div>

            {/* Notifications */}
            <div style={{
              marginBottom: 'var(--space-8)'
            }}>
              <Checkbox
                id="notifications"
                label="Enable medical alerts and notifications"
                checked={formData.notifications}
                onChange={(checked) => handleInputChange('notifications', checked)}
                size="md"
              />
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: 'var(--space-3)',
              justifyContent: 'flex-end',
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--medical-07)'
            }}>
              <Button
                variant="secondary"
                onClick={() => console.log('Reset form')}
                style={{ minWidth: '100px' }}
              >
                Reset
              </Button>
              <Button
                variant="primary"
                onClick={() => console.log('Save settings', formData)}
                style={{ minWidth: '100px' }}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Settings
