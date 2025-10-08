import { useState } from 'react'
import Header from '../components/Header'
import TextField from '../components/TextField'
import Checkbox from '../components/Checkbox'

interface SettingsProps {
  navigateTo?: (page: string) => void
  hasClerk?: boolean
}

const Settings = ({ navigateTo, hasClerk = false }: SettingsProps) => {
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
      background: 'var(--shade-08)',
      margin: 0,
      padding: 0
    }}>
      <Header navigateTo={navigateTo} hasClerk={hasClerk} />
      
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

          {/* Settings Form (no background container padding) */}
          <div style={{
            background: 'transparent',
            borderRadius: 'var(--radius-medium)',
            padding: 0,
            border: 'none'
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
              gap: 'var(--space-6)',
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
              gap: 'var(--space-6)',
              marginBottom: 'var(--space-8)'
            }}>
              <div className="field">
                <label className="field-label">Theme</label>
                <select
                  className="field-select field-input--md"
                  value={formData.theme}
                  onChange={(e) => handleInputChange('theme', e.target.value)}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>

              <div className="field">
                <label className="field-label">Language</label>
                <select
                  className="field-select field-input--md"
                  value={formData.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
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
              borderTop: '1px solid var(--shade-07)'
            }}>
              <button
                className="btn btn-secondary"
                onClick={() => console.log('Reset form')}
                style={{ minWidth: '100px' }}
              >
                Reset
              </button>
              <button
                className="btn btn-primary"
                onClick={() => console.log('Save settings', formData)}
                style={{ minWidth: '100px' }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Settings
